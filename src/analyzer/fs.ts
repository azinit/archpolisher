import _ from "lodash";

// FIXME: optimize algo?
// FIXME: optimize structure? (Array<string | Array>[]?)
export function fsGroupBy(cuts: string[][], idx = 0): FSGraph {
    const graph = _.groupBy(cuts, (cut) => cut[idx]);
    const recCuts = Object.entries(graph).reduce((acc: FSGraph, [gDir, gCuts]) => {
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
export function getModules(fsGraph: FSGraph, root: string[] = [], minDepth = 2): Module[] {
    // TODO: for simple modules (index.tsx)
    // TODO: for complex modules ({... index.tsx})
    // TODO: for different extensions (tsx, ts, js, jsx)
    // TODO: for header and etc...
    // const depth = root.split("/").length; //? // FIXME:
    const depth = root.length;
    const modules = Object.entries(fsGraph).map(([dirName, dirTree]) => {
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

// FIXME: replace by actual fs structure?
export function getStructure(imports: ImportsGraph) {
    const files = Object.keys(imports);
    const fsCuts = files.map((f) => f.split("/"));
    console.log(fsCuts.slice(100))
    const structure = fsGroupBy(fsCuts);
    return structure;
}

// FIXME: refine impl?
export function asModule(imp: Module, modules: Module[]): Module {
    const module = modules.find((m) => imp.includes(m));
    return module || imp
}

// function filterUnique<T = any>(array: Array<T>): Array<T> {
//     return [...new Set(array)];
// }

// Вытягиваем и упрощаем граф
export function getModGraph(imports: ImportsGraph, modules: Module[]): ModulesGraph {
    // imports //?
    // modules //?
    // const modGraph = Object.entries(imports).reduce((acc: ModulesGraph, [iFrom, iDeps]) => {
    //     // FIXME: костыль!!!
    //     if (iFrom === "default") return acc;
    //     const mFrom = asModule(iFrom, modules); //?
    //     const mDeps = iDeps.map(id => asModule(id, modules));

    //     return {...acc, [mFrom]: mDeps};
    // }, {})
    // FIXME: optimize! (O(n^2)!!!)
    const modGraph = modules.reduce((acc: ModulesGraph, module) => {
        const moduleFiles = Object.keys(imports).filter(im => im.includes(module));
        const moduleOutImports = moduleFiles.map(mf => imports[mf]).flat();
        const moduleOutDeps = _.uniq(
            moduleOutImports
                .map(moi => asModule(moi, modules))
                // FIXME: Учитывать в будущем и кросс-импорты!
                .filter(moi => moi !== module)
        );
        return { ...acc, [module]: moduleOutDeps };
    }, {});
    return modGraph;
}

// FIXME: Рекурсию опасно, т.к. могут быть цикл. зависимости (но как-то все равно придется прорабатывать!)
// FIXME: refine impl!
export function orderModules(modules: Module[], mg: ModulesGraph): Module[][] {
    return [[]];
}
export function getModGraphOrdered(mg: ModulesGraph) {
    const processed = [];
    const modules = Object.keys(mg);
    const result = [];

    // modules.forEach(callbackfn)
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
// asModule(modulesMap.FE_AUTH_HOOKS, modulesList) //? 

// export const modulesList = getModules(structureMap["shared"], ["shared"], 1); //?

// // FIXME: specify index.ts files
// export function getFSDist(file1: Module, file2: Module): number {
//     const aFile1 = asAbsFile(file1);
//     const aFile2 = asAbsFile(file2);

//     return -1;
// }

export function getProjFiles(imports: ImportsGraph): TFile[] {
    return Object.keys(imports)
        // FIXME: fix hack with default?
        .filter((f) => f !== "default");

}