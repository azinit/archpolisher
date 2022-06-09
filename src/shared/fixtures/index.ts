import { importsGraph, FIXTURES } from "./data";
import { moduleLib } from "analyzer";

// FIXME: simplify??
export const structureMap = moduleLib.getStructure(importsGraph);
// FIXME: shared/components/org
export const modulesList = moduleLib.getModules(structureMap, [], 1);
// FIXME: Костыль! Найти все в модулях и структуре!
// !!! Находятся почему-то не все связи (app/hocs#withApollo > features#Auth)
modulesList.push("shared/get-env", "models.gen.ts", "models.ts"); // + app/hocs?
// FIXME: app/hocs, app в modulesList - твои действия?ы
modulesList

export const modGraph: ModulesGraph = moduleLib.getModGraph(importsGraph, modulesList); //? 
// FIXME: Дорого проходить N^2 граф! Придумать способ изящнее!
export const modGraphInverted: ModulesGraph = modulesList.reduce((acc, module) => {
    const outDeps = modulesList.filter((it) => modGraph[it].includes(module));
    return { ...acc, [module]: outDeps };
}, {}) //?


export const _modGraphOrder = moduleLib.getModGraphOrdered(modGraph);

// !!! TODO: Impl! (см. листок)
// FIXME: Стоит ли схлопывать app с app/hocs в таком случае? Как быть вне FSD? (надо чекнуть!)
// export const modGraphOrder: Module[][] = [
//     ["app"],
//     ["pages"],
//     ["features"],
//     ["shared/get-env", "shared/hooks", "shared/helpers", "shared/components"],
//     ["models.ts", "models.gen.ts"],
// ]
export const modGraphOrder: Module[][] = [
    ["app"],
    ["pages"],
    ["features"],
    ["shared/get-env", "shared/hooks", "shared/helpers", "shared/components"],
    ["models.ts"],
    ["models.gen.ts"],
]

// export const projFiles = Object.keys(importsGraph).map(asAbsFile); //?
export const projFiles = Object.keys(importsGraph)
    // FIXME: fix hack with default?
    .filter((f) => f !== "default");

export { importsGraph, FIXTURES };
