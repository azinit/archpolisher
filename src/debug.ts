import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import { __FIXTURES as F, clustersFiles } from "shared/fixtures";
const { Project } = analyzer.fs;

const imports: ImportsGraph = F.GH_FDD.imports;
const project = new Project(imports, { abstractnessDepth: 3 });
const dataset = clusterizer.prepareDataset(project, "files"); //?
const clustering = clusterizer.cluster(dataset); //?

// === INSTABILITY (0, 0.6, 0.8, 1)
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.SH_GET_ENV, project); //?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.PG_AUTH_UI, project); //?
// NOTE: (NonActual?) in[header] == 0? failed resolution?
analyzer.metrics.calcInstabilityFile(F.GH_FDD.files.HEADER, project); //?
const __totalInstability = project.files.reduce((acc, file, idx) => {
    const fileI = analyzer.metrics.calcInstabilityFile(file, project);
    return { ...acc, [file]: fileI }
}, {}) //?
// === ABSTRACTNESS (0, .25, .5, .75)
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.HEADER, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.PG_AUTH_UI, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcAbstractnessFile(F.GH_FDD.files.SH_GET_ENV, project); //?
project.modules.reduce((acc, m) => ({ ...acc, [m]: analyzer.metrics.calcAbstractnessFile(m, project) }), {}) //?
// === FS (1, 0, 4, 2, 1)
// FIXME: analyzer.fs.getFSDist("features/repo-search", "features/repo-search") //?
analyzer.fs.getFSDist("features/repo-search/smth", "features/repo-filter") //?
analyzer.fs.getFSDist("features/auth/session.ts", "features/auth/firebase.ts") //?
analyzer.fs.getFSDist("features/auth/session.ts", "entities/viewer/index.ts") //?
analyzer.fs.getFSDist("features/foo/auth", "features/auth/bar") //?
analyzer.fs.getFSDist("lib", "shared/lib") //? 

// === CLUSTERING#Issues ()
clusterizer.findClusterIssues([
    "shared/lib/dom.ts",
    "shared/lib/compose.ts",
    // "shared/components/card.tsx",
    "helpers/index.ts",
]) //?
clusterizer.findProjectIssues(project, clustering); //?
// === CLUSTERING
// clusterizer.unifyGroup(clustersFiles.single) //?
// clusterizer.unifyGroup(clustersFiles.multiple) //?
// clusterizer.unifyGroup(clustersFiles.shared) //?
clusterizer.unifyGroup(clustersFiles.modules) //?
