export default {
    // [GH_] files: [num=1, rad=0.05]
    // [FSD] files: [num=1, rad=0.06]
    // [FSD] modules: [num=1, rad=0.06+]
    // NOTE: custom filter for files? (regeexp)
    "fixtures": "GH_FDD",
    "strategy": "modules",
    "exts": ["tsx", "ts", "jsx", "js"],
    "clustering": {
        "neighNum": 1,
        "neighRadius": 0.06
    }
}