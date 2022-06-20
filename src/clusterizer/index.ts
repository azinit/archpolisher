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
    units: FSUnit[],
};

export type ClusterOptions = {
    /** neighborhood radius */
    neighRadius: number;
    /** number of points in neighborhood to form a cluster */
    neighNum: number;
    spread: number;
}
export type ClustersResult = {
    clusters: Cluster[];
    noise: Cluster;
    dataset: Dataset;
};

const DEFAULT_OPTIONS: ClusterOptions = { neighRadius: 0.2, neighNum: 3, spread: 0 };

// default eps = 0.01
const __getEps = (unit: FSUnit, eps = 0.01) => {
    // return _.random(-eps, eps, true)
    // const hash = unit.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    // return hash % 5 * eps;
    return eps * unit.split("/").length;
};

function normalize(min: number, max: number) {
    var delta = max - min;
    return function (val: number): number {
        return (val - min) / delta;
    };
}

export function prepareDataset(
    project: TProject,
    strategy: DatasetStrategy = "modules",
    options: ClusterOptions = DEFAULT_OPTIONS
): Dataset {
    const units = project[strategy];
    const getInstability = strategy === "modules" ? analyzer.metrics.calcInstability : analyzer.metrics.calcInstabilityFile;
    const getAbstractness = strategy === "modules" ? analyzer.metrics.calcAbstractness : analyzer.metrics.calcAbstractnessFile;
    const fsCoords = units.map(unit => analyzer.metrics.calcFSCoords(unit, project));
    const fsMax = _.max(fsCoords)!;
    const fsMin = _.min(fsCoords)!;
    // const _fsCoords = fsCoords.map(normalize(fsMin, fsMax));

    const data = units.map((unit, uIdx) => [
        getInstability(unit, project) + __getEps(unit, options.spread),
        getAbstractness(unit, project) + __getEps(unit, options.spread),
        normalize(fsMin, fsMax)(fsCoords[uIdx]),
    ]);
    // NOTE: simplify?
    // const data = strategy === "modules"
    //     ? units.map((unit) => [
    //         analyzer.metrics.calcInstability(unit, project) + __getEps(unit, options.spread),
    //         analyzer.metrics.calcAbstractness(unit, project) + __getEps(unit, options.spread),
    //     ])
    //     : units.map((unit) => [
    //         analyzer.metrics.calcInstabilityFile(unit, project) + __getEps(unit, options.spread),
    //         analyzer.metrics.calcAbstractnessFile(unit, project) + __getEps(unit, options.spread),
    //     ])

    return { data, strategy, units };
}

/**
 * Clustering
 * NOTE: Add custumizing of algo?
 */
export function cluster(dataset: Dataset, options: ClusterOptions = DEFAULT_OPTIONS): ClustersResult {
    const dbscan = new mlClustering.DBSCAN();
    const clusters = dbscan.run(dataset.data, options.neighRadius, options.neighNum);
    const noise = dbscan.noise;
    return { clusters, noise, dataset };
}
