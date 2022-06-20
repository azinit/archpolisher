import _ from "lodash";

export function calcAbstractnessFile(file: TFile, project: TProject): number {
    return calcAbstractness(project.asModule(file), project);
};
export function calcAbstractness(module: Module, project: TProject): number {
    const maxWeight = _.max(Object.values(project.modulesWeights)) as number;
    // NOTE: add eps? (+- 0.05 * idx);
    // NOTE: Учитывать двухсторонние связи для вычитания абстрактности? Или забить на цикличность? (app <=> features)
    const moduleWeight = project.modulesWeights[module];
    if (moduleWeight === undefined) return 0.5; // null/-1
    return 1 - (moduleWeight / maxWeight);
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
