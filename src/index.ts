import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import { _GH_FDD } from "shared/fixtures";

const { Project } = analyzer.fs;

// !!! (Imports) Находятся почему-то не все связи (app/hocs#withApollo > features#Auth)
// !!! (Imports) only for different specific extensions (tsx, ts, js, jsx) | scss/css later
// NOTE: (Modules) Улучшить анализ boundaries для модулей (shared/ui? shared/ui/button? shared/ui/button/index.tsx?)
// NOTE: (PublicAPI) add "index" resolution aliases for modules (shared/ui, not only shared/ui/button)
// NOTE: (PublicAPI) resolve reesports ({Auth} from features <=> features/auth)
// NOTE: (Metrics) I: (A>B>C - более устойчивый/неустойчивый? не всегда!)
// NOTE: (Metrics) Calc dist from main sequence D = |A + I - 1 | // 0 - на главной, 1 - далеко от нее
// NOTE: (Metrics) I&A не всегда отражают реальную картину
// NOTE: (Metrics) С улучшением I&A не всегда становится лучше на проекте
// NOTE: (Metrics/A) С ориентированным графом модулей все +- понятно, но что делать если он еще циклический? Как определять основное направление графа? (для распределения абстрактности)
// NOTE: (Metrics/A) shared/compoonents зависит от models.ts / shared/lib - как быть? (один же слой, какая разница? Како бозначить такие шареды которых будет дохуища в проектах?)
// NOTE: (UnitsGraph) Даже если boundaries будет по "умному" определению с костыльными index.ts, то граф импортов все равно останется таким же... надо копать глубже, в юниты!
// NOTE: (UnitsGraph) decomposition factor (проблема не всегда в I&A, но и декомпозици по файлам/модулям)
// NOTE: (UnitsGraph)Импорты хорошо, но нужно учитывать юниты! (особенно с подставами как с PublicAPI у фичей и пейджей)
// NOTE: Project instance with DI? (without passing as param)

function main(imports: ImportsGraph) {
    const project = new Project(imports);
    const dataset = clusterizer.prepareDataset(project); //?
    // NOTE: specify/refine neigh options values
    const clustering = clusterizer.cluster(dataset, { neighNum: 10, neighRadius: 0.15 }); //?
    clusterizer.render(project, dataset, clustering); //?
}

function debug(imports: ImportsGraph) {
    const project = new Project(imports, { abstractnessDepth: 3 });

    // === INSTABILITY
    analyzer.metrics.calcInstability(_GH_FDD.files.SH_GET_ENV, project); //? 0
    analyzer.metrics.calcInstability(_GH_FDD.files.FE_AUTH_HOOKS, project); //? 0.6
    analyzer.metrics.calcInstability(_GH_FDD.files.PG_AUTH_UI, project); //? 0.8
    // NOTE: (NonActual?) in[header] == 0? failed resolution?
    analyzer.metrics.calcInstability(_GH_FDD.files.HEADER, project); //? 1
    const __totalInstability = project.files.reduce((acc, file, idx) => {
        const fileI = analyzer.metrics.calcInstability(file, project);
        return { ...acc, [file]: fileI }
    }, {}) //?
    // === ABSTRACTNESS
    // analyzer.metrics.calcAbstractness(_GH_FDD.files.HEADER, project); //? 0.00
    // analyzer.metrics.calcAbstractness(_GH_FDD.files.PG_AUTH_UI, project); //? 0.25
    // analyzer.metrics.calcAbstractness(_GH_FDD.files.FE_AUTH_HOOKS, project); //? 0.50
    // analyzer.metrics.calcAbstractness(_GH_FDD.files.SH_GET_ENV, project); //? 0.75
    project.modules.reduce((acc, m) => ({ ...acc, [m]: analyzer.metrics.calcAbstractness(m, project) }), {}) //?
}


main(_GH_FDD.imports);
// debug(_GH_FDD.imports);
