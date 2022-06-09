import PRESET_GH_FDD from "./imports.gh-fdd.json";

// const FIXTURES_CUTS = Object.entries(FIXTURES).reduce((acc, [fKey, fImp]) => {
//     return { ...acc, [fKey]: asAbsFile(fImp).split("/")};
// }, {})

function __asAbsFile(file: TFile): TFile {
    // NOTE: normalize truncating
    // const files = Object.keys(importsBaseGraph).map((file) => file.replaceAll("../", "").replace("./", ""));
    return file.replace("../", "");
}

// !!! FIXME: Починить парсинг импортов, вместо клина
// NOTE: replace to native replaceAll
function __cleanImports(imports: ImportsGraph): ImportsGraph {
    return Object.entries(imports).reduce((acc, [file, fileDeps]) => {
        return { ...acc, [__asAbsFile(file)]: fileDeps.map(__asAbsFile) };
    }, {});
}

export const _GH_FDD = {
    imports: __cleanImports(PRESET_GH_FDD) as ImportsGraph,
    files: {
        SH_GET_ENV: "shared/get-env/index.ts",
        FE_AUTH_HOOKS: "features/auth/hooks.ts",
        FE_AUTH_FBINIT: "features/auth/firebase/init.ts",
        FE_REXP_HOOKS: "features/repo-explorer/components/hooks.ts",
        PG_AUTH_UI: "pages/auth/index.tsx",
        // FIXME: feature/auth#useAuth usage detecting 
        HEADER: "app/header/index.tsx",
    }
} //?
