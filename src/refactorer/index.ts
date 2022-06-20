import fs from "fs";
import _ from "lodash";
import type { ClustersResult, Dataset } from "clusterizer";
import * as analyzer from "analyzer";
import { COLORS, BLUE_COLORS } from "shared/lib";
import userConfig from "../config";

export function render(project: TProject, clustering: ClustersResult, dataset: Dataset, issues: FSResult) {
    const labels = dataset.strategy === "modules"
        ? project.modules
        : project.files.map((file) => file.split("/").slice(0, 3).join("/"));

    
    // noise в начало, чтобы сначало отрендерились серые
    // NOTE: неочевидно что gray первым

    // TODO: Добавить разные виды отображения?
    const issuesUnits = issues.issues.map(i => i.module);
    const issuesClustersIndices = issues.issues.map(i => i._cluster);
    // const issuesClusters = clustering.clusters.filter((_, idx) => issuesClustersIndices.includes(idx));
    const issuesClusters = clustering.clusters;
    const clusters = [clustering.noise, ...issuesClusters];
    // FIXME: modules (clust: 10, 0.15)
    // const clustersUnits = clusters.map(cluster => cluster.map(idx => project[clustering.strategy][idx]));
    const datasets = clusters.map((group, gIdx) => ({
        label: (gIdx === 0) ? "Noise" : `Group#${gIdx}`,
        // label: (idx === 0) ? "Noise" : unifyGroup(clustersUnits[idx], 4),
        // label: (idx === 0)
        //     ? "Noise"
        //     : clustersUnits[idx]
        backgroundColor: BLUE_COLORS[gIdx],
        pointRadius: 10,
        borderWidth: 2,
        pointBorderColor: group.map(fIdx => {
            const unit = labels[fIdx];
            // console.log(unit, {issuesUnits});
            // if (issuesUnits.some(iu => iu.includes(unit))) return "#953553";
            if (issuesUnits.some(iu => iu === unit)) return "#953553";
            return BLUE_COLORS[gIdx];
        }),
        data: group.map(fIdx => {
            const [x, y] = dataset.data[fIdx];
            return { x, y, label: labels[fIdx] };
        })
    }))

    const dataContent = `
var userConfig = ${JSON.stringify(userConfig, null, "\t")};
var issues = ${JSON.stringify(issues, null, "\t")};
var datasets = ${JSON.stringify(datasets, null, "\t")};
var files = ${JSON.stringify(project.files, null, "\t")};
var modules = ${JSON.stringify(project.modules, null, "\t")};
    `;
    fs.writeFileSync("src/refactorer/ui/data.js", dataContent); //?
}

export function unifyGroup(group: FSUnit[], maxSiblings = 4) {
    if (group.length === 1) {
        return group[0];
    }

    const cuts = group.map((f) => f.split("/"));
    const structure = analyzer.fs.fsGroupBy(cuts);
    const root: string[] = [];
    let children: FSUnit[] = [];
    let cursor: Structure | null = structure;
    while (cursor) {
        children = Object.keys(cursor);
        if (children.length === 1) {
            const nextRoot = children[0];
            root.push(nextRoot);
            cursor = cursor[nextRoot];
            continue;
        }
        // Different dirs
        cursor = null;
    }

    const rootLabel = root.join("/");
    const childrenLabel = children.length > maxSiblings
        ? "{*}"
        : children.length > 0
            ? `{${children.join("|")}}`
            : undefined;
    if (!rootLabel) return childrenLabel;
    return `${rootLabel}/${childrenLabel}`;
}

const MAX_FS_DIST = 3;

/**
 * Find clustering issues for file-structure of project
 * @example
 * Response:
 * {
 *  date: "2022-06-10T03:59:50",
 *  description: "Some modules should be transferred, according to Instability&Abstractness modules clustering",
 *  amount: 3,
 *  issues: [
 *      {
 *         from: "lib",
 *         to: "shared/{hooks, helpers}",
 *      },
 *      {
 *         from: "MODULE_FROM",
 *         to: "MODULES_TO",
 *      },
 *  ]
 * }
 */
export function findProjectIssues(project: TProject, clustering: ClustersResult, options: Partial<RefactorerOptions> = {}): FSResult {
    const _options = { ...DEFAULT_OPTIONS, ...options };
    return {
        date: new Date().toISOString(),
        strategy: clustering.dataset.strategy,
        description: "Some modules should be transferred, according to Instability & Abstractness modules clustering",
        issues: clustering.clusters.map((cluster, _gidx) => {
            const units = cluster.map(idx => project[clustering.dataset.strategy][idx]);
            return findClusterIssues(units, cluster, clustering.dataset, _gidx, _options);
        }).flat(),
        noise: clustering.noise.map(idx => project[clustering.dataset.strategy][idx]),
    }
}

export type RefactorerOptions = {
    minDiff: number;
    minDist: number;
};
const DEFAULT_OPTIONS: RefactorerOptions = {
    minDiff: 3,
    minDist: 6,
}

export function findClusterIssues(
    units: FSUnit[],
    cluster: number[],
    dataset: Dataset,
    clusterIdx = 0,
    options: RefactorerOptions,
): FSIssue[] {
    if (units.length === 1) return [];

    // Считаем сумму расстояний до всех соседей в кластере
    const dists: number[] = units.map((u1) => (
        // NOTE: consider use "minDist" for summarizing
        _.sum(units.map((u2) => analyzer.fs.getFSDist(u1, u2))
        )));
    const maxDist = _.max(dists)!;
    if (maxDist < options.minDist) return [];

    const issuesUnits = units.filter((_, idx) => dists[idx] === maxDist);
    const neighUnits = units.filter((_, idx) => dists[idx] !== maxDist);
    if (issuesUnits.length === units.length) return [];
    // if (!neighUnits.length) console.log("DEBUG", { units, issuesUnits, neighUnits });

    // Для фильтрации файлов рядом в одном модуле
    const absDiff = maxDist - _.min(dists)!;
    if (absDiff < options.minDiff) return [];

    const clData = _.at(dataset.data, cluster);
    const clIMean = _.meanBy(clData, 0);
    const clAMean = _.meanBy(clData, 1);

    return issuesUnits.map((iu) => ({
        module: iu,
        similar: neighUnits,
        _cluster: clusterIdx,
        // 1 - [feat / Mean[cl_feats]]
        similarity: [
            1 - Math.abs(dataset.data[dataset.units.indexOf(iu)][0] - clIMean),
            1 - Math.abs(dataset.data[dataset.units.indexOf(iu)][1] - clAMean),
            // clIMean,
            // clAMean,
        ],
        // units: dataset.units,
        // __absDiff: absDiff,
        // __dists: dists,
        // __ds: [
            // dataset.data.map(d => d[0]),
            // dataset.data.map(d => d[1]),
        // ],
        // __units: units,
    }))
};