import * as analyzer from "analyzer";
import * as archpolisher from ".";

console.log({ archpolisher, analyzer });

analyzer.parser
    .parseProject()
    .then(archpolisher.run);
