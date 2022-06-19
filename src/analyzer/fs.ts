import _ from "lodash";

export type AnalyzerConfig = {
    extensions: string[];
    abstractnessDepth: number;
};

type Options = Partial<AnalyzerConfig>;

const DEFAULT_OPTIONS = {
    abstractnessDepth: 3,
    extensions: ["tsx", "ts", "jsx", "js"],
};


export class Project {
    // FIXME: rename with grouping (files**, modules** [filesImports, modulesImports]) + rename at metrics
    imports: ImportsGraph;
    structure: Structure;
    files: TFile[];
    modules: Module[];
    modulesGraph: ModulesGraph;
    modulesWeights: ModulesWeights;

    constructor(imports: ImportsGraph, options: Options = DEFAULT_OPTIONS) {
        const inOptions = { ...DEFAULT_OPTIONS, ...options, }
        this.imports = this.cleanImports(imports, inOptions.extensions);
        this.files = Object.keys(this.imports);
        this.structure = this.getStructure();
        // FIXME: refine options
        // NOTE: Если сделать 2 (для специфичных слоев), то это не меняет фактических импортов (в итоге все поломается)
        // NOTE: (NonActual?) app/hocs, app в modulesList - твои действия?
        this.modules = getModules(this.structure);
        // Modules graph
        this.modulesGraph = this.getModulesGraph();
        this.modulesWeights = this.getModulesWeights(inOptions.abstractnessDepth);
    }

    /**
     * Отфильтровываем лишние файлы (например scss/css)
     */
    private cleanImports(imports: ImportsGraph, exts: string[]): ImportsGraph {
        const filesMask = new RegExp(`.*\\.(${exts.join("|")})`);
        return Object.entries(imports).reduce((acc: ImportsGraph, [file, deps]) => {
            const _isIndex = ["index.tsx", "index.ts"].includes(file);
            const isAllowed = filesMask.test(file) && !_isIndex;
            if (!isAllowed) return acc;
            const filteredDeps = deps.filter(d => filesMask.test(d));
            return { ...acc, [file]: filteredDeps };
        }, {});
    }

    private getStructure(): Structure {
        // NOTE: replace by actual fs structure?
        const fsCuts = this.files.map((f) => f.split("/"));
        const structure = fsGroupBy(fsCuts);
        return structure;
    }

    /** Упрощаем граф зависимостей до уровня модулей */
    private getModulesGraph(): ModulesGraph {
        // NOTE: optimize! (O(n^2)!) // iter-by-files with uniqSet
        return this.modules.reduce((acc: ModulesGraph, module) => {
            /** Файлы-содержимое (модуля) */
            const moduleChildren = this.files.filter(file => file.includes(module));
            /** Внешние модули-пользователи (модуля) */
            const moduleOutDeps = moduleChildren
                .map(oFile => this.imports[oFile]).flat()
                .map(oFile => this.asModule(oFile))
                // NOTE: Учитывать в будущем и кросс-импорты!
                .filter(oModule => oModule !== module);
            return { ...acc, [module]: _.uniq(moduleOutDeps) };
        }, {});
    }

    /**
     * 
     * @param depth (max=5)
     * @example
     *  ["app"],
     *  ["pages"],
     *  ["features"],
     *  ["shared/get-env", "shared/hooks", "shared/helpers", "shared/components"],
     *  ["models.ts", "models.gen.ts"],
     */
    private getModulesWeights(depth = 5): ModulesWeights {
        let __map: Record<string, any> = {};
        const result = this.modules.reduce((acc, module) => {
            const deps1 = this.modulesGraph[module]; // depth=1
            const deps2 = deps1.map(dep => this.modulesGraph[dep]).flat(); // depth=2
            const deps3 = deps2.map(dep => this.modulesGraph[dep]).flat(); // depth=3
            const deps4 = deps3.map(dep => this.modulesGraph[dep]).flat(); // depth=4
            const deps5 = deps4.map(dep => this.modulesGraph[dep]).flat(); // depth=5
            // NOTE: refine depth iterating!
            const totalDeps = [deps1, deps2, deps3, deps4, deps5];
            const deps = _.uniq(totalDeps.slice(0, depth).flat())
            __map[module] = deps;
            return { ...acc, [module]: deps.length };
        }, {});
        __map;
        return result;
    }

    // Предполагается, что для любого файла есть верхнеуровневый модуль (иначе все крашнется сразу)
    public asModule(file: TFile): Module {
        // return this.modules.find((m) => file.includes(m))!; // index.tsx bug!
        return this.modules.find((m) => _.startsWith(file, m))!;
    }
};

// NOTE: specify index.ts files
// NOTE: Simplify algo?
export function getFSDist(unit1: FSUnit, unit2: FSUnit): number {
    if (unit1 === unit2) return 0;
    const tokens1 = unit1.split("/");
    const tokens2 = unit2.split("/");
    const minLength = Math.min(tokens1.length, tokens2.length);
    const intersection = [];
    for (let i = 0; i < minLength; i++) {
        if (tokens1[i] !== tokens2[i]) break;
        intersection.push(tokens1[i]);
    }
    return tokens1.length + tokens2.length - intersection.length * 2 - 2;
}

// NOTE: optimize algo?
// NOTE: optimize structure? (Array<string | Array>[]?)
export function fsGroupBy(cuts: string[][], depth = 0): Structure {
    const graph = _.groupBy(cuts, (cut) => cut[depth]);
    const recCuts = Object.entries(graph).reduce((acc: Structure, [gDir, gCuts], idx) => {
        const isFile = gCuts[0].length < depth + 2; // NOTE: why 2?
        const gRecCuts = isFile ? undefined : fsGroupBy(gCuts, depth + 1);
        return { ...acc, [gDir]: gRecCuts };
    }, {});
    return recCuts;
}

// NOTE: refine strategy, not only by hasIndex (by User / by general-deep-dir / by has-files / by has-index / ...)
// NOTE: refine algo?
// NOTE: detect button/button.tsx case
// NOTE: root convert to string?
// FIXME: detect shared/components/button && shared/helpers
function getModules(structure: Structure, root: string[] = []): Module[] {
    const modules = Object.entries(structure).map(([dirName, dirTree]) => {
        if (!dirTree && !root.length) return dirName;
        if (!dirTree) return [];
        // Has index inner check
        const dirFiles = Object.keys(dirTree);
        const nextRoot = [...root, dirName];
        const hasIndex = dirFiles.some((df) => /index.(ts|tsx|jsx|js)/.test(df));
        const isBoundary = hasIndex; // NOTE: add yet more!
        if (isBoundary) return nextRoot.join("/")
        // Continue recursion
        const dirModules = getModules(dirTree, nextRoot);
        return dirModules;
    }).flat();
    return modules;
    // return modules.filter(m => !["index.tsx", "index.ts"].includes(m));
}

export interface IProject extends Project { };
