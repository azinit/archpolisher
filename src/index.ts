import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import { _GH_FDD } from "shared/fixtures";

const { Project } = analyzer.fs;

// TODO: add "index" resolution aliases for modules (shared/ui, not only shared/ui/button)
// FIXME: resolve for .scss
// FIXME: I: (A>B>C - более устойчивый/неустойчивый? не всегда!)
// FIXME: resolve reesports ({Auth} from features <=> features/auth)
// Calc dist from main sequence D = |A + I - 1 | // 0 - на главной, 1 - далеко от нее
// NOTE: I&A не всегда отражают реальную картину
// NOTE: С улучшением I&A не всегда становится лучше на проекте
// TODO: decomposition factor (проблема не всегда в I&A, но и декомпозици по файлам/модулям)
// TODO: Улучшить анализ boundaries для модулей (shared/ui? shared/ui/button? shared/ui/button/index.tsx?)
// TODO: PUBLIC-API: Даже если boundaries будет по "умному" определению с костыльными index.ts, то граф импортов все равно останется таким же... надо копать глубже, в юниты!
// FIXME: Не брать в учет scss/css
// TODO: С ориентированным графом модулей все +- понятно, но что делать если он еще циклический? Как определять основное направление графа? (для распределения абстрактности)
// TODO: shared/compoonents зависит от models.ts / shared/lib - как быть? (один же слой, какая разница? Како бозначить такие шареды которых будет дохуища в проектах?)
// TODO: Импорты хорошо, но нужно учитывать юниты! (особенно с подставами как с PublicAPI у фичей и пейджей)
// !!! FIXME: Project with DI? (without passing as param)

function main(imports: ImportsGraph) {
    const project = new Project(imports);
    const dataset = clusterizer.prepareDataset(project); //?
    // FIXME: specify neigh options
    const clustering = clusterizer.cluster(dataset, { neighNum: 10, neighRadius: 0.15 }); //?
    clusterizer.render(project, dataset, clustering); //?
}

function debug(imports: ImportsGraph) {
    const project = new Project(imports, { abstractnessDepth: 3 });

    // === INSTABILITY
    analyzer.metrics.calcInstability(_GH_FDD.files.SH_GET_ENV, project); //? 0
    analyzer.metrics.calcInstability(_GH_FDD.files.FE_AUTH_HOOKS, project); //? 0.6
    analyzer.metrics.calcInstability(_GH_FDD.files.PG_AUTH_UI, project); //? 0.8
    // FIXME: in[header] == 0? failed resolution?
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
