import fs from "fs";
import _ from "lodash";
import type { ClustersResult, Dataset } from "clusterizer";
import * as analyzer from "analyzer";
import { COLORS } from "shared/lib";
import userConfig from "../config";

export function render(project: TProject, clustering: ClustersResult, dataset: Dataset, issues: FSResult) {
    const labels = dataset.strategy === "modules"
        ? project.modules
        : project.files.map((file) => file.split("/").slice(0, 3).join("/"));

    // noise в начало, чтобы сначало отрендерились серые
    // NOTE: неочевидно что gray первым
    const clusters = [clustering.noise, ...clustering.clusters];
    // FIXME: modules (clust: 10, 0.15)
    const clustersUnits = clusters.map(cluster => cluster.map(idx => project[clustering.strategy][idx]));
    const datasets = clusters.map((group, idx) => ({
        // label: `Group#${idx}`
        label: (idx === 0) ? "Noise" : unifyGroup(clustersUnits[idx]),
        backgroundColor: COLORS[idx],
        pointRadius: 10,
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
    const cuts = group.map((f) => f.split("/"));
    const structure = analyzer.fs.fsGroupBy(cuts);
    const root = [];
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
export function findProjectIssues(project: TProject, clustering: ClustersResult): FSResult {
    return {
        date: new Date().toISOString(),
        strategy: clustering.strategy,
        description: "Some modules should be transferred, according to Instability & Abstractness modules clustering",
        issues: clustering.clusters.map((cluster) => {
            const units = cluster.map(idx => project[clustering.strategy][idx]);
            return findClusterIssues(units);
        }).flat(),
        noise: clustering.noise.map(idx => project[clustering.strategy][idx]),
    }
}

// !!! FIXME: one unit cluster exception
export function findClusterIssues(units: FSUnit[]): FSIssue[] {
    // Считаем сумму расстояний до всех соседей в кластере
    const dists: number[] = units.map((u1) => (
        // NOTE: consider use "minDist" for summarizing
        _.sum(units.map((u2) => analyzer.fs.getFSDist(u1, u2))
        )));
    const maxDist = _.max(dists);
    const issuesUnits = units.filter((_, idx) => dists[idx] === maxDist);
    const neighUnits = units.filter((_, idx) => dists[idx] !== maxDist);
    return issuesUnits.map((iu) => ({
        module: iu,
        similar: neighUnits,
        // __dists: dists,
        // __units: units,
    }))
};