import _ from "lodash";
type Options = {
    abstractnessDepth: number;
};

const DEFAULT_OPTIONS: Options = {
    abstractnessDepth: 3,
};


export class Project {
    imports: ImportsGraph;
    structure: Structure;
    files: TFile[];
    modules: Module[];
    modulesGraph: ModulesGraph;
    modulesWeights: ModulesWeights;

    constructor(imports: ImportsGraph, options = DEFAULT_OPTIONS) {
        this.imports = imports;
        this.files = Object.keys(imports);
        this.structure = this.getStructure();
        // FIXME: refine options
        // NOTE: Если сделать 2 (для специфичных слоев), то это не меняет фактических импортов (в итоге все поломается)
        // NOTE: (NonActual?) app/hocs, app в modulesList - твои действия?
        this.modules = getModules(this.structure, [], 1);
        // Modules graph
        this.modulesGraph = this.getModulesGraph();
        this.modulesWeights = this.getModulesWeights(options.abstractnessDepth);
    }

    private getStructure(): Structure {
        // NOTE: replace by actual fs structure?
        const fsCuts = this.files.map((f) => f.split("/"));
        const structure = fsGroupBy(fsCuts);
        return structure;
    }

    /** Упрощаем граф зависимостей до уровня модулей */
    private getModulesGraph(): ModulesGraph {
        // NOTE: optimize! (O(n^2)!!!) // iter-by-files with uniqSet
        return this.modules.reduce((acc: ModulesGraph, module) => {
            /** Файлы-содержимое (модуля) */
            const moduleChildren = this.files.filter(file => file.includes(module));
            /** Внешние модули-пользователи (модуля) */
            const moduleOutDeps = moduleChildren
                .map(oFile => this.imports[oFile]).flat()
                .map(oFile => this.asModule(oFile))
                // FIXME: Учитывать в будущем и кросс-импорты!
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
        return this.modules.reduce((acc, module) => {
            const deps1 = this.modulesGraph[module]; // depth=1
            const deps2 = deps1.map(dep => this.modulesGraph[dep]).flat(); // depth=2
            const deps3 = deps2.map(dep => this.modulesGraph[dep]).flat(); // depth=3
            const deps4 = deps3.map(dep => this.modulesGraph[dep]).flat(); // depth=4
            const deps5 = deps4.map(dep => this.modulesGraph[dep]).flat(); // depth=5
            // FIXME: refine depth iterating!
            const totalDeps = [deps1, deps2, deps3, deps4, deps5];
            const deps = _.uniq(totalDeps.slice(0, depth).flat())
            return { ...acc, [module]: deps.length };
        }, {});
    }

    // FIXME: refine impl?
    public asModule(file: TFile): Module | TFile {
        const module = this.modules.find((m) => file.includes(m));
        return module || file;
    }
};

// // FIXME: specify index.ts files
// export function getFSDist(file1: TFile, file2: TFile): number {
//     const aFile1 = asAbsFile(file1);
//     const aFile2 = asAbsFile(file2);

//     return -1;
// }

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
function getModules(structure: Structure, root: string[] = [], minDepth = 2): Module[] {
    const depth = root.length;
    const modules = Object.entries(structure).map(([dirName, dirTree]) => {
        // NOTE: (&& !root.length) ? // Только для одиночных файлов
        if (!dirTree) return dirName;
        // Has index inner check
        const dirFiles = Object.keys(dirTree);
        const nextRoot = [...root, dirName];
        const hasIndex = dirFiles.some((df) => /index.(ts|tsx|jsx|js)/.test(df));
        // !!! FIXME: Один большой костыль для нестинга! (+minDepth)
        const __limit = root.includes("shared") ? minDepth : minDepth - 1;
        const __isDepthLimited = depth >= __limit;
        const isBoundary = hasIndex && __isDepthLimited;
        if (isBoundary) return nextRoot.join("/")
        // Continue recursion
        const dirModules = getModules(dirTree, nextRoot, minDepth);
        return dirModules;
    }).flat();
    return modules;
}

export interface IProject extends Project {};
