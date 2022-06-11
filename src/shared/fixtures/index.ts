import PRESET_GH_FSD from "./gh-fsd.imports.json";
import PRESET_GH_FDD from "./gh-fdd.imports.json";
import PRESET_GH_FDD_SPEC from "./gh-fdd-spec.imports.json";
import PRESET_GH_FDD_APP from "./gh-fdd-app.imports.json";
import PRESET_FAVEIN from "./favein.imports.json";

const GH_FDD = {
    imports: PRESET_GH_FDD as ImportsGraph,
    files: {
        SH_GET_ENV: "shared/get-env/index.ts",
        FE_AUTH_HOOKS: "features/auth/hooks.ts",
        FE_AUTH_FBINIT: "features/auth/firebase/init.ts",
        FE_REXP_HOOKS: "features/repo-explorer/components/hooks.ts",
        PG_AUTH_UI: "pages/auth/index.tsx",
        // FIXME: feature/auth#useAuth usage detecting 
        HEADER: "app/header/index.tsx",
    }
}
const GH_FDD__APP = { imports: PRESET_GH_FDD_APP as ImportsGraph, files: GH_FDD.files }
const GH_FDD__SPEC = { imports: PRESET_GH_FDD_SPEC as ImportsGraph, files: GH_FDD.files }
const FAVEIN = { imports: PRESET_FAVEIN as ImportsGraph, files: {} }
const GH_FSD = { imports: PRESET_GH_FSD as ImportsGraph, files: {} }
export const __FIXTURES = {
    GH_FDD,
    GH_FDD__APP,
    GH_FDD__SPEC,
    GH_FSD,
    FAVEIN,
}

export const clustersFiles = {
    single: [
        "features/search/results/queries.gen.ts",
        "features/search/results/toolbar/index.scss",
        "features/search/results/toolbar/index.tsx",
        "features/search/results/toolbar/sort-select.tsx",
        "features/user-info/hooks.ts",
        "features/user-info/index.scss",
        "features/user-info/index.tsx",
        "features/user-info/queries.gen.ts",
    ],
    multiple: [
        "features/user-info/hooks.ts",
        "features/user-info/index.scss",
        "features/user-info/index.tsx",
        "features/user-info/queries.gen.ts",
        "models.gen.ts",
        "models.ts",
        "pages/auth/index.scss",
        "pages/auth/index.tsx",
    ],
    shared: [
        "shared/components/card/index.scss",
        "shared/components/card/index.tsx",
        "shared/components/card/skeleton-group/index.tsx",
        "shared/components/card/skeleton/index.scss",
        "shared/components/card/skeleton/index.tsx",
        "shared/components/index.ts",
        "shared/components/org/index.scss",
        "shared/components/org/index.tsx",
        "shared/components/repo/index.scss",
        "shared/components/repo/index.tsx",
        "shared/components/repo/lang.tsx",
        "shared/components/simple-pagination/index.scss",
        "shared/components/simple-pagination/index.tsx",
        "shared/components/tabs/index.tsx",
        "shared/components/tabs/item/index.scss",
        "shared/components/tabs/item/index.tsx",
        "shared/components/user/index.tsx",
    ],
    modules: [
        "shared/get-env",
        "shared/helpers",
    ]
}
