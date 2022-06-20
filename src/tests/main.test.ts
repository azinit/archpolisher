// // import * as fixtures from "shared/fixtures";
// import * as analyzer from "analyzer";
// import * as clusterizer from "clusterizer";
// import * as refactorer from "refactorer";
// import * as fixtures from "shared/fixtures";
// import config from "./config";
import { __FIXTURES } from "shared/fixtures";
import { run } from "../index";
import userConfig from "../config";

run(__FIXTURES[userConfig.fixtures].imports); //?
// console.log("TEST", { analyzer, clusterizer, refactorer, fixtures });
