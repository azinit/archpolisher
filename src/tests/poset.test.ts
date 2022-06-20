// @ts-ignore
import { minima } from "@partial-order/poset";
// @ts-ignore
import {increasing} from '@total-order/primitive';
// import * as analyzer from "analyzer";
// import { _GH_FDD } from "shared/fixtures";
// const project = new analyzer.project.Project(_GH_FDD.imports); //?
import _ from "lodash";

const mg: Record<Module, Module[]> = {
    features: [
        'shared/get-env',
        'shared/hooks',
        'models.ts',
        'models.gen.ts',
        'shared/helpers',
        'shared/components'
    ],
    pages: ['features', 'shared/helpers', 'models.ts'],
    'shared/components': ['models.ts'],
    'shared/helpers': [],
    'shared/hooks': [],
    app: ['features', 'shared/get-env', 'shared/helpers', 'pages'],
    'shared/get-env': [],
    'models.gen.ts': [],
    'models.ts': ['models.gen.ts']
}

const ml = Object.keys(mg); //?

function compare(m1: Module, m2: Module): boolean | null {
    if (mg[m1].includes(m2)) return true;
    if (mg[m2].includes(m1)) return false;
    return null;
}

function getRels() {
    const pairs: any = [];
    const map: any = {};
    ml.forEach((mlItem, idx) => {
        const deps1 = mg[mlItem]; // depth=1
        const deps2 = deps1.map(dep => mg[dep]).flat() // depth=2
        const deps3 = deps2.map(dep => mg[dep]).flat() // depth=3
        const deps4 = deps3.map(dep => mg[dep]).flat() // depth=4

        // FIXME: customize by "depth";
        const deps = _.uniq([
            ...deps1,
            ...deps2,
            ...deps3,
            ...deps4,
        ]);
        // const depsIndices = deps.map((dep) => ml.indexOf(dep));
        // const itRels = depsIndices.map((dIdx) => [idx, dIdx]);
        const itRels = deps.map((dep) => [mlItem, dep]);
        pairs.push(...itRels);
        map[mlItem] = deps;
    })
    return { pairs, map };
}

// const posetN = minima(isRel, ml, 0, ml.length); //?
// ml.slice(0, posetN) //?
// ml.slice(0, posetN).sort(increasing); //?
// ml.sort(compare) //?
const rels = getRels();
rels.map //?
// FIXME: Refine!!

const weights: Record<Module, number> = ml.reduce((acc, it) => ({...acc, [it]: rels.map[it].length }), {});
_.groupBy(ml, (it) => weights[it])

// function extendModulesGraph(): ModulesGraph {
//     return {};
// }

// function extendDeps(deps: ModuleDeps, module: Module, depth = 1): ModuleDeps {
//     if (depth === 0) return deps;
//     if (depth === 1) {
//         const childDeps = mg[module];
//         return [...deps, ...childDeps];
//     }
//     if (depth === 2) {
//         const childDeps = deps.map(d => extendDeps(deps, d, depth - 1)).flat();
//         return _.uniq(childDeps);
//     }
//     return _.uniq([...deps, ...deps.map(d => extendDeps(deps, module))])
// }
function getModulesWeights(depth = 1) {
    // Extend modules graph
    const depsWeights: Record<Module, number> = ml.reduce((acc, module) => {
        const deps1 = mg[module]; // depth=1
        const deps2 = deps1.map(dep => mg[dep]).flat(); // depth=2
        const deps3 = deps2.map(dep => mg[dep]).flat(); // depth=3
        const deps4 = deps3.map(dep => mg[dep]).flat(); // depth=4
        const deps5 = deps4.map(dep => mg[dep]).flat(); // depth=5
        // FIXME: refine depth iterating!
        const totalDeps = [deps1, deps2, deps3, deps4, deps5];
        // FIXME: customize by "depth";
        const deps = _.uniq(totalDeps.slice(0, depth).flat())
        return { ...acc, [module]: deps.length };
    }, {});
    // const order = Object.values(_.groupBy(ml, (it) => depsWeights[it]));
    // // FIXME: Учитывать и разницу в кол-ве связей? (учитывая глубину, это тоже должно влиять по идее)
    // const abstWeights = order.map((group, idx) => (
    //     group.map(it => ({ name: it, weight: idx }))
    // ));
    // const maxWeight = _.max(Object.values(depsWeights)); //?
    return depsWeights;
}

getModulesWeights(3); //?