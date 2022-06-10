import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import { _GH_FDD, _FAVEIN, _GH_FDD__SPEC, _GH_FDD__APP, _GH_FSD } from "shared/fixtures";
const { Project } = analyzer.fs;

const imports: ImportsGraph = _GH_FDD.imports;
const project = new Project(imports, { abstractnessDepth: 3 });

// === INSTABILITY
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.SH_GET_ENV, project); //? 0
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.FE_AUTH_HOOKS, project); //? 0.6
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.PG_AUTH_UI, project); //? 0.8
// NOTE: (NonActual?) in[header] == 0? failed resolution?
analyzer.metrics.calcInstabilityFile(_GH_FDD.files.HEADER, project); //? 1
const __totalInstability = project.files.reduce((acc, file, idx) => {
    const fileI = analyzer.metrics.calcInstabilityFile(file, project);
    return { ...acc, [file]: fileI }
}, {}) //?
// === ABSTRACTNESS
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.HEADER, project); //? 0.00
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.PG_AUTH_UI, project); //? 0.25
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.FE_AUTH_HOOKS, project); //? 0.50
analyzer.metrics.calcAbstractnessFile(_GH_FDD.files.SH_GET_ENV, project); //? 0.75
project.modules.reduce((acc, m) => ({ ...acc, [m]: analyzer.metrics.calcAbstractnessFile(m, project) }), {}) //?
