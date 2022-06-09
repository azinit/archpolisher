import mlClustering from "density-clustering";
import fs from "fs";
import { calcInstability, calcAbstractness, moduleLib } from "analyzer";
import { COLORS } from "shared/lib";

const dbscan = new mlClustering.DBSCAN();

// const dataset = [
//     [1,1],[0,1],[1,0],
//     [10,10],[10,13],[13,13],
//     [54,54],[55,55],[89,89],[57,55]
// ];
// projFiles.includes("default") //?

// FIXME: customize by user
// neighborhood radius
const NEIGH_RAD = 0.2;
// number of points in neighborhood to form a cluster
const NEIGH_NUM = 3;

type Cluster = number[];
type UnitFeatures = number[];
type Dataset = UnitFeatures[];
type ClustersResult = {
    clusters: Cluster[];
    noise: Cluster;
    // // FIXME: Найти способ не передавать промежуточные вычисления
    // __dataset: UnitFeatures[];
};

export function prepareDataset(projFiles: TFile[], imports: ImportsGraph) {
    // FIXME: for styles/{...scss} { Nan, -1 };
    return projFiles.map((file) => [
        calcInstability(imports, file),
        calcAbstractness(file)
    ]); //? 
}

export function cluster(dataset: Dataset, neighRadius = NEIGH_RAD, neighNum = NEIGH_NUM): ClustersResult {
    const clusters = dbscan.run(dataset, neighRadius, neighNum); //?
    const noise = dbscan.noise; //?

    // const clustFiles = clustIndices.map(clustGroup => clustGroup.map((cIdx) => projFiles[cIdx])); //?
    // const noiseFiles = noiseIndices.map(nIdx => projFiles[nIdx]); //?
    // const noiseDS = noiseIndices.map(nIdx => dataset[nIdx]); //?
    return { clusters, noise  };
}

// console.log("Clusters:", clusters);
// console.log("Noize:", dbscan.noise);

// console.log("==== NOIZE ====");
// console.log(noiseFiles);

// console.log("==== CLUSTERS ====");
// clustFiles.forEach((clGr, grIdx) => {
//     console.log(`\tGROUP <${grIdx}>`);
//     console.log(clGr);
// });

export function render(projFiles: TFile[], dataset: Dataset, clustering: ClustersResult) {
    const labels = projFiles.map((file) => moduleLib.asAbsFile(file).split("/").slice(0, 3).join("/"));

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
