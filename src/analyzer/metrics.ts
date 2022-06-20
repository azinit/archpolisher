import _ from "lodash";

export function calcAbstractnessFile(file: TFile, project: TProject): number {
    return calcAbstractness(project.asModule(file), project);
};
export function calcAbstractness(module: Module, project: TProject): number {
    const byIdx = calcAbstractnessIdx(module, project);
    const byWeight = calcAbstractnessWeight(module, project);

    return _.mean([
        byIdx,
        byIdx,
        byWeight,
    ])
}

function calcAbstractnessWeight(module: Module, project: TProject): number {
    const maxWeight = _.max(Object.values(project.modulesWeights)) as number;
    // NOTE: add eps? (+- 0.05 * idx);
    // NOTE: Учитывать двухсторонние связи для вычитания абстрактности? Или забить на цикличность? (app <=> features)
    const moduleWeight = project.modulesWeights[module];
    if (moduleWeight === undefined) return 0.5; // null/-1
    return 1 - (moduleWeight / maxWeight);
}

export function calcAbstractnessIdx(module: Module, project: TProject): number {
    const pw = Object.values(project.modulesWeights)
    const pwSorted = [...pw].sort((a, b) => a - b);
    const maxIdx = pwSorted.length - 1;

    const modWeight = project.modulesWeights[module];
    if (modWeight === undefined) return 0.5; // null/-1

    const modIdx = pwSorted.indexOf(modWeight);
    return 1 - (modIdx / maxIdx);
}

export function calcInstabilityFile(file: TFile, project: TProject): number {
    return calcInstability(file, project, "imports");
}

type __Imports = "modulesGraph" | "imports";

export function calcInstability(module: Module, project: TProject, __imports: __Imports = "modulesGraph"): number {
    // Calc deps by external modules
    const outDeps = project[__imports][module];
    if (outDeps === undefined) return 0.5; // -1/null
    // Calc deps from external modules
    const inDeps = Object.entries(project[__imports]).filter(([gModule, gDeps]) => {
        if (gModule === module) return false;
        const gResult = gDeps.includes(module);
        return gResult;
    });
    // FIXME: outDeps===0 & inDeps== 0? (isolated scripts)
    if (!outDeps.length && !inDeps.length) return 0 //

    return outDeps.length / (inDeps.length + outDeps.length);
}

const FS_LIMIT = 4;

export function calcFSCoords(module: Module, project: TProject): number {
    const tokens = module.split("/");
    const indices = _.fill(Array(FS_LIMIT), 0);
    let cursor: Structure = project.structure;
    let cursorIdx = 0;
    let children: FSUnit[] = Object.keys(cursor);
    
    while (tokens.length && children.length && cursorIdx < FS_LIMIT) {
        const token = tokens.shift()!;
    
        const idx = children.indexOf(token);
        if (idx === -1) break;
        indices[cursorIdx] = idx;
        
        cursor = cursor[token];
        children = cursor ? Object.keys(cursor) : [];
        cursorIdx++;
    }
    // features, auth, consts.ts
    // models.ts
    // shared, get-env

    const coord = indices.reduce((acc, val, idx) => {
        const exp = 10 ** (FS_LIMIT - idx);
        return acc + exp * val;
    }, 0)
    return coord;
}
