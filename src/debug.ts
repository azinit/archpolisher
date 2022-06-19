import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import * as refactorer from "refactorer";
import { __FIXTURES as F, clustersFiles } from "shared/fixtures";
import glob2reg from "glob-to-regexp";
import config from "./config";
const { Project } = analyzer.fs;

const imports: ImportsGraph = F.GH_FDD__SPEC.imports;
const project = new Project(imports, { ...config, abstractnessDepth: 3 });
const dataset = clusterizer.prepareDataset(project, "files"); //?
const clustering = clusterizer.cluster(dataset); //?

// === INSTABILITY (0, 0.6, 0.8, 1)
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.SH_GET_ENV, project); //?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.PG_AUTH_UI, project); //?
// NOTE: (NonActual?) in[header] == 0? failed resolution?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.HEADER, project); //?
const __totalInstability = project.files.reduce((acc, file, idx) => {
    const value = analyzer.metrics.calcInstabilityFile(file, project);
    return { ...acc, [file]: value }
}, {}) //?
// === ABSTRACTNESS (0, .25, .5, .75)
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.HEADER, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.PG_AUTH_UI, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.SH_GET_ENV, project); //?
const __totalAbstractness = project.modules.reduce((acc, module, idx) => {
    const value = analyzer.metrics.calcAbstractness(module, project);
    return { ...acc, [module]: value }
}, {}) //?
project.modules.reduce((acc, m) => ({ ...acc, [m]: analyzer.metrics.calcAbstractnessFile(m, project) }), {}) //?
// === FS (1, 0, 4, 2, 1)
// FIXME: analyzer.fs.getFSDist("features/repo-search", "features/repo-search") //?
analyzer.fs.getFSDist("features/repo-search/smth", "features/repo-filter") //?
analyzer.fs.getFSDist("features/auth/session.ts", "features/auth/firebase.ts") //?
analyzer.fs.getFSDist("features/auth/session.ts", "entities/viewer/index.ts") //?
analyzer.fs.getFSDist("features/foo/auth", "features/auth/bar") //?
analyzer.fs.getFSDist("lib", "shared/lib") //? 

// === CLUSTERING#Issues ()
refactorer.findClusterIssues([
    "shared/lib/dom.ts",
    "shared/lib/compose.ts",
    // "shared/components/card.tsx",
    "helpers/index.ts",
]) //?
refactorer.findProjectIssues(project, clustering); //?
// === CLUSTERING
refactorer.unifyGroup(clustersFiles.single) //?
refactorer.unifyGroup(clustersFiles.multiple) //?
refactorer.unifyGroup(clustersFiles.shared) //?
refactorer.unifyGroup(clustersFiles.modules) //?

// const imBefore = imports;
// const imAfter = cleanImports(imports)
// console.log("before: ", Object.keys(imBefore).length, "| after: ", Object.keys(imAfter).length);
// const filesMask = glob2reg("**/*/.{ts,tsx,js,jsx}");
// const filesMask = /.*\.(tsx|ts|jsx|js)/;
// filesMask.test("features/auth/firebase/auth-github.ts") //?
// filesMask.test("features/origin/index.scss") //?
// filesMask.test("styles/normalize-antd.scss") //?
// filesMask.test("app/index.tsx") //?