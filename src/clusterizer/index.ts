import mlClustering from "density-clustering";
import fs from "fs";
import * as analyzer from "analyzer";
import { COLORS } from "shared/lib";

type Cluster = number[];
type UnitFeatures = number[];

/**
 * Dataset of features
 * @example 
 *  [[1,1],[0,1],[1,0],
 *  [10,10],[10,13],[13,13],
 *  [54,54],[55,55],[89,89],[57,55]]
 */
type Dataset = UnitFeatures[];
type ClusterOptions = {
    /** neighborhood radius */
    neighRadius: number;
    /** number of points in neighborhood to form a cluster */
    neighNum: number;
}
type ClustersResult = {
    clusters: Cluster[];
    noise: Cluster;
};

const DEFAULT_OPTIONS: ClusterOptions = { neighRadius: 0.2, neighNum: 3 };

export function prepareDataset(project: TProject) {
    // !!! FIXME: for styles/{...scss} { Nan, -1 };
    return project.files.map((file) => [
        analyzer.metrics.calcInstability(file, project),
        analyzer.metrics.calcAbstractness(file, project)
    ]);
}

/**
 * Clustering
 * NOTE: Add custumizing of algo?
 */
export function cluster(dataset: Dataset, options: ClusterOptions = DEFAULT_OPTIONS): ClustersResult {
    const dbscan = new mlClustering.DBSCAN();
    const clusters = dbscan.run(dataset, options.neighRadius, options.neighNum); //?
    const noise = dbscan.noise; //?

    // const clustFiles = clustIndices.map(clustGroup => clustGroup.map((cIdx) => projFiles[cIdx])); //?
    // const noiseFiles = noiseIndices.map(nIdx => projFiles[nIdx]); //?
    // const noiseDS = noiseIndices.map(nIdx => dataset[nIdx]); //?
    return { clusters, noise };
}

export function render(project: TProject, dataset: Dataset, clustering: ClustersResult) {
    const labels = project.files.map((file) => file.split("/").slice(0, 3).join("/"));

    // noise в начало, чтобы сначало отрендерились серые
    // NOTE: неочевидно что gray первым
    const clusters = [clustering.noise, ...clustering.clusters];
    const clustersFiles = clusters.map(cluster => cluster.map(idx => project.files[idx]));
    const datasets = clusters.map((group, idx) => ({
        // label: `Group#${idx}`,
        label: unifyGroup(clustersFiles[idx]),
        backgroundColor: COLORS[idx],
        data: group.map(fIdx => {
            const [x, y] = dataset[fIdx];
            return { x, y, label: labels[fIdx] };
        })
    }))

    const dsJSON = JSON.stringify(datasets, null, "\t");
    const dsFileContent = `var datasets = ${dsJSON};`
    fs.writeFileSync("src/clusterizer/ui/ds.js", dsFileContent); //?
}

const GROUPS = {
    single: [
        "features/search/results/queries.gen.ts",
        "features/search/results/toolbar/index.scss",
        "features/search/results/toolbar/index.tsx",
        "features/search/results/toolbar/sort-select.tsx",
        "features/user-info/hooks.ts",
        "features/user-info/index.scss",
        "features/user-info/index.tsx",
        "features/user-info/queries.gen.ts",
    ],
    multiple: [
        "features/user-info/hooks.ts",
        "features/user-info/index.scss",
        "features/user-info/index.tsx",
        "features/user-info/queries.gen.ts",
        "models.gen.ts",
        "models.ts",
        "pages/auth/index.scss",
        "pages/auth/index.tsx",
    ],
    shared: [
        "shared/components/card/index.scss",
        "shared/components/card/index.tsx",
        "shared/components/card/skeleton-group/index.tsx",
        "shared/components/card/skeleton/index.scss",
        "shared/components/card/skeleton/index.tsx",
        "shared/components/index.ts",
        "shared/components/org/index.scss",
        "shared/components/org/index.tsx",
        "shared/components/repo/index.scss",
        "shared/components/repo/index.tsx",
        "shared/components/repo/lang.tsx",
        "shared/components/simple-pagination/index.scss",
        "shared/components/simple-pagination/index.tsx",
        "shared/components/tabs/index.tsx",
        "shared/components/tabs/item/index.scss",
        "shared/components/tabs/item/index.tsx",
        "shared/components/user/index.tsx",
    ],
}

function unifyGroup(group: TFile[]) {
    const cuts = group.map((f) => f.split("/"));
    const structure = analyzer.fs.fsGroupBy(cuts);
    const root = [];
    let children: TFile[] = [];
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
    const childrenLabel = children.length > 4
        ? "{*}"
        : children.length > 0
            ? `{${children.join("|")}}`
            : undefined
    if (!rootLabel) return childrenLabel;
    return `${rootLabel}/${childrenLabel}`;
}

unifyGroup(GROUPS.single) //?
unifyGroup(GROUPS.multiple) //?
unifyGroup(GROUPS.shared) //?