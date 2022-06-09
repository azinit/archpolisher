import * as importsBase from "./imports.gh-fdd.json";

export const FIXTURES = {
    SH_GET_ENV: "../shared/get-env/index.ts",
    FE_AUTH_HOOKS: "../features/auth/hooks.ts",
    FE_AUTH_FBINIT: "../features/auth/firebase/init.ts",
    FE_REXP_HOOKS: "../features/repo-explorer/components/hooks.ts",
    PG_AUTH_UI: "../pages/auth/index.tsx",
    // FIXME: feature/auth#useAuth usage detecting 
    HEADER: "../app/header/index.tsx",
};

// const FIXTURES_CUTS = Object.entries(FIXTURES).reduce((acc, [fKey, fImp]) => {
//     return { ...acc, [fKey]: asAbsFile(fImp).split("/")};
// }, {})

export const importsGraph = importsBase as ImportsGraph;
