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

export function prepareDataset(project: Project) {
    // FIXME: for styles/{...scss} { Nan, -1 };
    return project.files.map((file) => [
        analyzer.metrics.calcInstability(file, project),
        analyzer.metrics.calcAbstractness(file, project)
    ]);
}

/**
 * Clustering
 * FIXME: Add custumizing of algo?
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

export function render(project: Project, dataset: Dataset, clustering: ClustersResult) {
    const labels = project.files.map((file) => file.split("/").slice(0, 3).join("/"));

    // noise в начало, чтобы сначало отрендерились серые
    // FIXME: неочевидно что gray первым
    const datasets = [clustering.noise, ...clustering.clusters].map((group, idx) => ({
        label: `Group#${idx}`,
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
