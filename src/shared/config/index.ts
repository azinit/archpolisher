import { cosmiconfigSync } from "cosmiconfig";

const explorerSync = cosmiconfigSync("archpolisher");
const result = explorerSync.search();

export const userConfig = result?.config as UserConfig;
