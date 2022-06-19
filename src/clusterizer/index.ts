import mlClustering from "density-clustering";
import * as analyzer from "analyzer";
import _ from "lodash";

type FSUnitIdx = number;
type Cluster = FSUnitIdx[];
type UnitFeatures = number[];

/**
 * Dataset of features
 * @example 
 *  [[1,1],[0,1],[1,0],
 *  [10,10],[10,13],[13,13],
 *  [54,54],[55,55],[89,89],[57,55]]
 */
export type Dataset = {
    data: UnitFeatures[],
    strategy: DatasetStrategy,
};

export type ClusterOptions = {
    /** neighborhood radius */
    neighRadius: number;
    /** number of points in neighborhood to form a cluster */
    neighNum: number;
}
export type ClustersResult = {
    clusters: Cluster[];
    noise: Cluster;
    strategy: DatasetStrategy;
};

const DEFAULT_OPTIONS: ClusterOptions = { neighRadius: 0.2, neighNum: 3 };

// default eps = 0.01
const __getEps = (unit: FSUnit, eps = 0.00) => {
    // return _.random(-eps, eps, true)
    // const hash = unit.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    // return hash % 5 * eps;
    return eps * unit.split("/").length;
};

export function prepareDataset(project: TProject, strategy: DatasetStrategy = "modules") {
    // NOTE: simplify?
    const data = strategy === "modules"
        ? project.modules.map((unit) => [
            analyzer.metrics.calcInstability(unit, project) + __getEps(unit),
            analyzer.metrics.calcAbstractness(unit, project) + __getEps(unit),
        ])
        : project.files.map((unit) => [
            analyzer.metrics.calcInstabilityFile(unit, project) + __getEps(unit),
            analyzer.metrics.calcAbstractnessFile(unit, project) + __getEps(unit),
        ])
    return { data, strategy };
}

/**
 * Clustering
 * NOTE: Add custumizing of algo?
 */
export function cluster(dataset: Dataset, options: ClusterOptions = DEFAULT_OPTIONS): ClustersResult {
    const dbscan = new mlClustering.DBSCAN();
    const clusters = dbscan.run(dataset.data, options.neighRadius, options.neighNum);
    const noise = dbscan.noise;
    return { clusters, noise, strategy: dataset.strategy };
}
