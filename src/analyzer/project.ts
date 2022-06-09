import * as fs from "./fs";

// FIXME: merge with fs?
export function buildProject(imports: ImportsGraph): Project {
    const files = Object.keys(imports);
    const structure = fs.getStructure(imports);
    // FIXME: refine options
    const modules = fs.getModules(structure, [], 1);
    // !!! FIXME: Костыль! Найти все в модулях и структуре!
    // !!! Находятся почему-то не все связи (app/hocs#withApollo > features#Auth)
    modules.push("shared/get-env", "models.gen.ts", "models.ts"); // + app/hocs?
    // FIXME: app/hocs, app в modulesList - твои действия?
    const modulesGraph = fs.getModGraph(imports, modules)
    // FIXME: Дорого проходить N^2 граф! Придумать способ изящнее!
    const modulesGraphInv = modules.reduce((acc, module) => {
        const outDeps = modules.filter((it) => modulesGraph[it].includes(module));
        return { ...acc, [module]: outDeps };
    }, {}) //?
    // const modulesOrder = fs.getModGraphOrdered(modGraph);
    const modulesOrder = [
        ["app"],
        ["pages"],
        ["features"],
        ["shared/get-env", "shared/hooks", "shared/helpers", "shared/components"],
        ["models.ts", "models.gen.ts"],
    ]
    const modulesWeights: ModulesWeight[] = modulesOrder.map((mgIt, idx) => {
        // if (typeof mgIt === "string") {
        //     return { name: mgIt, order: idx };
        // };
        // // FIXME: isArray?
        return mgIt.map(it => ({ name: it, order: idx }));
    }).flat(); //?

    return {
        files,
        structure,
        modules,
        imports,
        modulesGraph,
        modulesGraphInv,
        modulesOrder,
        modulesWeights,
    };
};
