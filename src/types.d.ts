declare type Module = string;
// FIXME: resole collisions!
declare type TFile = string;
declare type ImportsDeps = Module[];
declare type ImportsGraph = Record<Module, ImportsDeps>;
declare type ModulesGraph = Record<Module, ImportsDeps>;

// FIXME: refine type
declare type FSGraph = Record<string, any>;

declare type ModulesWeight = {
    name: string;
    order: number;
};
declare type Project = {
    imports: ImportsGraph;
    structure: FSGraph;
    files: TFile[];
    modules: Module[];
    modulesGraph: ModulesGraph;
    modulesGraphInv: {};
    modulesOrder: Module[][];
    modulesWeights: ModuleWeight[];
}