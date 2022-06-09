import _ from "lodash";

export function calcAbstractness(file: TFile, project: TProject): number {
    const maxWeight = _.max(Object.values(project.modulesWeights)) as number;
    // NOTE: add eps? (+- 0.05 * idx);
    // NOTE: Учитывать двухсторонние связи для вычитания абстрактности? Или забить на цикличность? (app <=> features)
    const moduleWeight = project.modulesWeights[project.asModule(file)];
    if (moduleWeight === undefined) return -1; // NOTE: 0.5?
    return 1 - (moduleWeight / maxWeight);
}

export function calcInstability(file: TFile, project: TProject): number {
    // Calc deps by external modules
    const outDeps = project.imports[file].length;
    if (outDeps === undefined) return -1;
    // Calc deps from external modules
    const inDeps = Object.entries(project.imports).filter(([gModule, gDeps]) => {
        // FIXME: redundant?
        if (gModule === file) return false;
        const gResult = gDeps.includes(file);
        return gResult;
    }).length;

    return outDeps / (inDeps + outDeps);
}
