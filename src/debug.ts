import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import { _GH_FDD, _FAVEIN, _GH_FDD__SPEC, _GH_FDD__APP, _GH_FSD } from "shared/fixtures";
const { Project } = analyzer.fs;

const imports: ImportsGraph = _GH_FDD.imports;
const project = new Project(imports, { abstractnessDepth: 3 });

// === INSTABILITY (0, 0.6, 0.8, 1)
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.SH_GET_ENV, project); //?
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.PG_AUTH_UI, project); //?
// NOTE: (NonActual?) in[header] == 0? failed resolution?
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.HEADER, project); //?
const __totalInstability = project.files.reduce((acc, file, idx) => {
    const fileI = analyzer.metrics.calcInstabilityFile(file, project);
    return { ...acc, [file]: fileI }
}, {}) //?
// === ABSTRACTNESS (0, .25, .5, .75)
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.HEADER, project); //?
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.PG_AUTH_UI, project); //?
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.FE_AUTH_HOOKS, project); //?
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.SH_GET_ENV, project); //?
project.modules.reduce((acc, m) => ({ ...acc, [m]: analyzer.metrics.calcAbstractnessFile(m, project) }), {}) //?
// === FS (1, 0, 4, 2, 1)
analyzer.fs.getFSDist("features/repo-search/smth", "features/repo-filter") //?
analyzer.fs.getFSDist("features/auth/session.ts", "features/auth/firebase.ts") //?
analyzer.fs.getFSDist("features/auth/session.ts", "entities/viewer/index.ts") //?
analyzer.fs.getFSDist("features/foo/auth", "features/auth/bar") //?
analyzer.fs.getFSDist("lib", "shared/lib") //? 
