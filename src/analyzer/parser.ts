import fs from "fs";
import path from "path";
import process from "process";
import madge from "madge";
import { userConfig } from "shared/config";

const config = {
    "warning": true,
    "tsConfig": "tsconfig.json",
    "fontSize": "10px",
    "graphVizOptions": {"G": {"rankdir": "LR"}},
};

export async function parseProject() {
    const packageDir = path.join(process.cwd(), ".archpolisher");
    if (!fs.existsSync(packageDir)) fs.mkdirSync(packageDir);

    // Parse imports
    const result = await madge(userConfig.analyzer.root, config);
    const imports: ImportsGraph = result.obj();
    // Save to fs
    result.image(".archpolisher/imports.svg");
    fs.writeFileSync(".archpolisher/imports.json", JSON.stringify(imports, null, "\t"));
    return imports;
};
