import _ from "lodash";
import { IProject } from "./fs";

export function calcAbstractnessFile(file: TFile, project: TProject): number {
    return calcAbstractness(project.asModule(file), project);
};
export function calcAbstractness(module: Module, project: TProject): number {
    const maxWeight = _.max(Object.values(project.modulesWeights)) as number;
    // NOTE: add eps? (+- 0.05 * idx);
    // NOTE: Учитывать двухсторонние связи для вычитания абстрактности? Или забить на цикличность? (app <=> features)
    const moduleWeight = project.modulesWeights[module];
    if (moduleWeight === undefined) return -1; // NOTE: 0.5?
    return 1 - (moduleWeight / maxWeight);
}

export function calcInstabilityFile(file: TFile, project: TProject): number {
    return calcInstability(file, project, "imports");
}

type __Imports = "modulesGraph" | "imports";

export function calcInstability(module: Module, project: TProject, __imports: __Imports = "modulesGraph"): number {
    // Calc deps by external modules
    const outDeps = project[__imports][module].length;
    if (outDeps === undefined) return -1; // FIXME: 0.5?
    // Calc deps from external modules
    const inDeps = Object.entries(project[__imports]).filter(([gModule, gDeps]) => {
        // !!! FIXME: remove? (test!)
        if (gModule === module) return false;
        const gResult = gDeps.includes(module);
        return gResult;
    }).length;

    return outDeps / (inDeps + outDeps);
}
