import { parseProject } from "./analyzer/parser";
import * as archpolisher from "./run";

console.log({ archpolisher, parseProject });

parseProject().then(archpolisher.run);
