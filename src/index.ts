/// <reference path="./types.d.ts" />

console.log("[ARCHPOLISHER] Hello World!");

import * as analyzer from "analyzer";
import * as clusterizer from "clusterizer";
import * as refactorer from "refactorer";
import config from "./config";
// import { __FIXTURES } from "shared/fixtures";

const { Project } = analyzer.fs;

// NOTE: (Modules) Улучшить анализ boundaries для модулей (shared/ui? shared/ui/button? shared/ui/button/index.tsx?)
// NOTE: (PublicAPI) add "index" resolution aliases for modules (shared/ui, not only shared/ui/button)
// NOTE: (PublicAPI) resolve reesports ({Auth} from features <=> [ARCHPOLISHER] features/auth)
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

const userConfig = config as unknown as UserConfig;

// const config = 
export function run(imports: ImportsGraph, config: UserConfig = userConfig) {
    console.log("> [ARCHPOLISHER] Analyzing modules...");
    const project = new Project(imports, config.analyzer); //?
    console.log("> [ARCHPOLISHER] Clustering by calculations...");
    const dataset = clusterizer.prepareDataset(project, config.strategy, config.clustering); //?
    const clustering = clusterizer.cluster(dataset, config.clustering); //?
    console.log("> [ARCHPOLISHER] Searching issues...");
    const issues = refactorer.findProjectIssues(project, clustering, config.refactorer);
    console.log("> [ARCHPOLISHER] Rendering results...");
    refactorer.render(project, clustering, issues); //?
    console.log("> [ARCHPOLISHER] Finished!");
    return issues;
}

import { __FIXTURES } from "shared/fixtures";
run(__FIXTURES[userConfig.fixtures].imports); //?
