declare type Module = string;
// FIXME: resole collisions!
declare type TFile = string;
declare type ImportsDeps = Module[];
declare type ImportsGraph = Record<Module, ImportsDeps>;
declare type ModulesGraph = Record<Module, ImportsDeps>;

// FIXME: refine type
declare type FSGraph = Record<string, any>;