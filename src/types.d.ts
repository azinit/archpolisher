declare type Module = string;
// FIXME: resole collisions!
declare type TFile = string;
declare type ImportsDeps = Module[];
declare type ImportsGraph = Record<Module, ImportsDeps>;
declare type ModulesGraph = Record<Module, ImportsDeps>;

// FIXME: refine type
declare type Structure = Record<string, any>;

declare type ModulesWeight = {
    name: string;
    order: number;
};

declare type TProject = import("./analyzer/project").IProject;
