export default {
    // [GH_] files: [num=1, rad=0.05]
    // [FSD] files: [num=1, rad=0.06]
    // [FSD] modules: [num=1, rad=0.06+]
    // NOTE: custom filter for files? (regeexp)
    // "GH_FDD" | "GH_FDD__SPEC" | "GH_FSD" | "FAVEIN"
    "fixtures": "GH_FDD",
    "strategy": "modules",
    "analyzer": {
        "extensions": ["tsx", "ts", "jsx", "js"],
        "abstractnessDepth": 5,
    },
    "clustering": {
        "neighNum": 1,
        "neighRadius": 0.06
    },
    "refactorer": {
        "minDist": 1,
        "minDiff": 1,
    },
}