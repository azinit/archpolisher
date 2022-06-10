import PRESET_GH_FDD from "./gh-fdd.imports.json";
import PRESET_GH_FDD_SPEC from "./gh-fdd-spec.imports.json";
import PRESET_GH_FDD_APP from "./gh-fdd-app.imports.json";
import PRESET_FAVEIN from "./favein.imports.json";

export const _GH_FDD = {
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
} //?

export const _GH_FDD__APP = {
    imports: PRESET_GH_FDD_APP as ImportsGraph,
    files: _GH_FDD.files,
} //?

export const _GH_FDD__SPEC = {
    imports: PRESET_GH_FDD_SPEC as ImportsGraph,
    files: _GH_FDD.files,
} //?

export const _FAVEIN = {
    imports: PRESET_FAVEIN as ImportsGraph,
    files: {},
} //?