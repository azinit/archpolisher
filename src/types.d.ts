declare type Module = string;
// FIXME: resole collisions!
declare type TFile = string;

declare type ModuleDeps = Module[];
declare type ModulesWeights = Record<Module, number>;

declare type ImportsGraph = Record<Module, ModuleDeps>;
declare type ModulesGraph = Record<Module, ModuleDeps>;
// FIXME: refine type
declare type Structure = Record<string, any>;

declare type TProject = import("./analyzer/fs").IProject;
