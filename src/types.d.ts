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
declare type DatasetStrategy = "modules" | "files";

declare type Datetime = string;

declare type FSIssue = {
    module: FSUnit;
    similar: FSUnit[];
    _cluster: number;
};
declare type FSResult = {
    date: Datetime;
    description: string;
    strategy: DatasetStrategy;
    issues: FSIssue[];
    noise: FSUnit[];
};

declare type UserConfig = {
    fixtures: keyof typeof import("shared/fixtures").__FIXTURES;
    strategy: DatasetStrategy;
    analyzer: import("analyzer").fs.AnalyzerConfig;
    clustering: import("clusterizer").ClusterOptions;
    refactorer: import("refactorer").RefactorerOptions;
}