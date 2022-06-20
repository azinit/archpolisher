const archpolisher = require("./dist");
const imports = require("./src/shared/fixtures/gh-fdd-spec.imports.json");
const userConfig = require("./dist/config");

archpolisher.run(imports, userConfig);
