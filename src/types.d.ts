declare type Module = string;
// NOTE: resole collisions!
declare type TFile = string;
declare type FSUnit = Module | TFile;

declare type ModuleDeps = Module[];
declare type ModulesWeights = Record<Module, number>;

declare type ImportsGraph = Record<Module, ModuleDeps>;
declare type ModulesGraph = Record<Module, ModuleDeps>;
// NOTE: refine type
declare type Structure = Record<string, any>;

declare type TProject = import("./analyzer/fs").IProject;
