import _ from "lodash";

// FIXME: merge with fs?
export class Project {
    // FIXME: resolve duplicates types?
    imports: ImportsGraph;
    structure: Structure;
    files: TFile[];
    modules: Module[];
    modulesGraph: ModulesGraph;
    modulesGraphInv: {};
    modulesOrder: Module[][];
    modulesWeights: { name: string; order: number; }[];

    constructor(imports: ImportsGraph) {
        this.imports = imports;
        this.files = Object.keys(imports);
        this.structure = this.getStructure();
        // FIXME: refine options
        this.modules = getModules(this.structure, [], 1);
        // !!! FIXME: Костыль! Найти все в модулях и структуре!
        // !!! Находятся почему-то не все связи (app/hocs#withApollo > features#Auth)
        this.modules.push("shared/get-env", "models.gen.ts", "models.ts"); // + app/hocs?
        // FIXME: app/hocs, app в modulesList - твои действия?
        // Modules graph
        this.modulesGraph = this.getModulesGraph();
        // FIXME: Дорого проходить N^2 граф! Придумать способ изящнее!
        this.modulesGraphInv = this.modules.reduce((acc, module) => {
            const outDeps = this.modules.filter((it) => this.modulesGraph[it].includes(module));
            return { ...acc, [module]: outDeps };
        }, {}) //?
        // Abstractness
        this.modulesOrder = this.getModulesOrder();
        this.modulesWeights = this.modulesOrder.map((mgIt, idx) => (
            mgIt.map(it => ({ name: it, order: idx }))
        )).flat(); //?
    }

    // FIXME: replace by actual fs structure?
    private getStructure(): Structure {
        const fsCuts = this.files.map((f) => f.split("/"));
        const structure = fsGroupBy(fsCuts);
        return structure;
    }

    // Вытягиваем и упрощаем граф
    private getModulesGraph(): ModulesGraph {
        // const modGraph = Object.entries(imports).reduce((acc: ModulesGraph, [iFrom, iDeps]) => {
        //     const mFrom = asModule(iFrom, modules); //?
        //     const mDeps = iDeps.map(id => asModule(id, modules));
        //     return {...acc, [mFrom]: mDeps};
        // }, {})
        // FIXME: optimize! (O(n^2)!!!)
        const modGraph = this.modules.reduce((acc: ModulesGraph, module) => {
            const moduleFiles = Object.keys(this.imports).filter(im => im.includes(module));
            const moduleOutImports = moduleFiles.map(mf => this.imports[mf]).flat();
            const moduleOutDeps = _.uniq(
                moduleOutImports
                    .map(moi => this.asModule(moi))
                    // FIXME: Учитывать в будущем и кросс-импорты!
                    .filter(moi => moi !== module)
            );
            return { ...acc, [module]: moduleOutDeps };
        }, {});
        return modGraph;
    }

    // FIXME: Рекурсию опасно, т.к. могут быть цикл. зависимости (но как-то все равно придется прорабатывать!)
    // FIXME: refine impl!
    private getModulesOrder(): Module[][] {
        // const processed = [];
        // const modules = this.modules;
        // const result = [];
        // modules.forEach(callbackfn)
        // !!! FIXME: mock!
        return [
            ["app"],
            ["pages"],
            ["features"],
            ["shared/get-env", "shared/hooks", "shared/helpers", "shared/components"],
            ["models.ts", "models.gen.ts"],
        ]
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

// FIXME: optimize algo?
// FIXME: optimize structure? (Array<string | Array>[]?)
function fsGroupBy(cuts: string[][], idx = 0): Structure {
    const graph = _.groupBy(cuts, (cut) => cut[idx]);
    const recCuts = Object.entries(graph).reduce((acc: Structure, [gDir, gCuts]) => {
        // if (gDir.includes("get-env")) {
        //     console.log("Chirik!");
        // }
        // FIXME: (get-env) Почему то выскакивает true, хотя должен false. Почему-то считает длину общего кортежа а не частного
        const isFile = gCuts.length < idx + 1; // FIXME: refine
        // if (isFile) return [...acc, gCuts[idx - 1]];
        // return [...acc, {[gDir]: fsGroupBy(gCuts, idx + 1)}];
        const gRecCuts = isFile ? gCuts[idx] : fsGroupBy(gCuts, idx + 1);
        // return { ...acc,  {[gDir]: gRecCuts}  };
        return { ...acc, [gDir]: gRecCuts };
    }, {});
    return recCuts;
}

// FIXME: refine strategy (by User / by general-deep-dir / by has-files / by has-index / ...)
// FIXME: refine algo?
// FIXME: minDepth crutch
// FIXME: detect button/button.tsx case
// FIXME: remove hadIndex crutch (need?)
// FIXME: detect shared/components/button && shared/helpers
function getModules(structure: Structure, root: string[] = [], minDepth = 2): Module[] {
    // TODO: for simple modules (index.tsx)
    // TODO: for complex modules ({... index.tsx})
    // TODO: for different extensions (tsx, ts, js, jsx)
    // TODO: for header and etc...
    // const depth = root.split("/").length; //? // FIXME:
    const depth = root.length;
    const modules = Object.entries(structure).map(([dirName, dirTree]) => {
        if (!dirTree) return [];
        // Has index inner check
        const dirFiles = Object.keys(dirTree);
        const nextRoot = [...root, dirName];
        const hasIndex = dirFiles.some((df) => /index.(ts|tsx|jsx|js)/.test(df));
        // const __indexed = hasIndex || hadIndex; // FIXME: Костыль!!
        const __limit = root.includes("shared") ? minDepth : minDepth - 1; // FIXME: Костыль!!!
        if (hasIndex && depth >= __limit) {
            // return [path.join(...root, dirName)];
            // return dirFiles.map((df) => path.join(root, dirName, df));
            return nextRoot.join("/")
        }
        // Continue recursion
        const dirModules = getModules(dirTree, nextRoot, minDepth);
        return dirModules;
    }).flat();
    return modules;
}


/*
> [features] [s/env, s/hooks, models, models.gen, s/help, s/comp]
> [features] [s/hooks, models, models.gen, s/help, s/comp] [s/env]
> [features] [models, models.gen, s/help, s/comp] [s/env, s/hooks]
> [features] [models, models.gen, s/help, s/comp] [s/env, s/hooks]
*/


/**
 * > [features] [s/env, s/hooks, models, models.gen, s/help, s/comp]
 * > [pages] [features] [s/env, s/hooks, models, models.gen, s/help, s/comp]
 * > [pages] [features] [s/comp] [s/env, s/hooks, models, models.gen, s/help, s/comp]
 * > ...
 * // NOTE: Группировать похожие?
 * > [app] [pages] [features] [s/comp] [models, models.gen]
 */

/**
 * Смотрим родителя и выносим вбок
 * !!! Проблема, что надо возможно смотреть еще надродителя (mod.g < mod < s/comp)
 * !!! Проблема, что нет складирования в одинаковые коробки, помимо "общих предков"
 * $ [features, pages, s/comp, s/help, s/hooks, app, s/env, mod.g, mod]
 * > [pages, app] [<features>, s/comp, s/help, s/hooks, s/env, mod.g, mod]
 * > [app] [<pages>] [features, s/comp, s/help, s/hooks, s/env, mod.g, mod]
 * > [app] [pages] [features] [<s/comp>, s/help, s/hooks, s/env, mod.g, mod]
 * > [app] [pages] [features] [s/comp, <s/help>, s/hooks, s/env, mod.g, mod]
 * > [app] [pages] [features] [s/comp, s/help, <s/hooks>, s/env, mod.g, mod]
 * > [app] [pages] [features] [s/comp, s/help, s/hooks, <s/env>, mod.g, mod]
 * > [app] [pages] [features] [s/comp, s/help, s/hooks, s/env, <mod.g>, mod]
 */


/**
 * Смотрим от "абстрактных" и до конкретных
 * $ [s/help, s/hooks, s/env, mod.g]
 * > [s/help, s/hooks, s/env, mod.g]
 */

export interface IProject extends Project {};
