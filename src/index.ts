/// <reference path="./types.d.ts" />

import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import config from "./config.json";
import * as fixtures from "shared/fixtures";

const { Project } = analyzer.fs;

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

// NOTE: specify/refine neigh options values
type Config = {
    fixtures: keyof typeof fixtures,
    strategy: DatasetStrategy,
    clustering: clusterizer.ClusterOptions,
}

const userConfig = config as unknown as Config;

// const config = 
function main(imports: ImportsGraph) {

    const project = new Project(imports); //?
    const dataset = clusterizer.prepareDataset(project, userConfig.strategy); //?
    const clustering = clusterizer.cluster(dataset, userConfig.clustering); //?
    const issues = clusterizer.findProjectIssues(project, clustering);
    clusterizer.render(project, clustering, dataset, issues); //?
    return issues;
}

main(fixtures[userConfig.fixtures].imports); //?
