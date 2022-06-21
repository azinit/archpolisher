// [GH_] files: [num=1, rad=0.05]
// [FSD] files: [num=1, rad=0.06]
// [FSD] modules: [num=1, rad=0.06+]
// NOTE: custom filter for files? (regeexp)
// "GH_FDD" | "GH_FDD__SPEC" | "GH_FSD" | "FAVEIN"
module.exports = {
    "strategy": "modules",
    "analyzer": {
        "extensions": ["tsx", "ts", "jsx", "js"],
        "abstractnessDepth": 5,
        "root": "./src/run.ts",
    },
    "clustering": {
        "neighNum": 1,
        // "neighRadius": 0.06,
        "neighRadius": 0.1,
        "spread": 0.00,
        "withFSDist": true,
    },
    "refactorer": {
        "title": "archpolisher",
        "onlyIssues": false,
        "minDist": 1,
        "minDiff": 3, //3-4
    },
}