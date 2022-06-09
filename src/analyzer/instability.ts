import { importsGraph, FIXTURES, projFiles } from "shared/fixtures";

const DEBUG = true;

export function calcInstability(graph: ImportsGraph, file: Module): number {
    // const inDeps = 4;
    // const outDeps = 0;

    // Calc deps by external modules
    const outDeps = graph[file].length;
    if (outDeps === undefined) return -1;
    // Calc deps from external modules
    const inDeps = Object.entries(graph).filter(([gModule, gDeps]) => {
        // FIXME: redundant?
        if (gModule === file) return false;
        // FIXME: what the "default"?
        if (gModule === "default") return false;
        // console.log(idx, gModule, gDeps);
        const gResult = gDeps.includes(file);
        return gResult;
    }).length;

    const result = outDeps / (inDeps + outDeps);
    if (DEBUG) console.log(`Instability[${file}] = ${result} // in=${inDeps}, outDeps=${outDeps}`);
    return result;
}

calcInstability(importsGraph, FIXTURES.SH_GET_ENV); //? 0
calcInstability(importsGraph, FIXTURES.FE_AUTH_HOOKS); //? 0.6
calcInstability(importsGraph, FIXTURES.PG_AUTH_UI); //? 0.8
// FIXME: in[header] == 0? failed resolution?
calcInstability(importsGraph, FIXTURES.HEADER); //? 1

const __totalInstability = projFiles.reduce((acc, file, idx) => {
    const fileI = calcInstability(importsGraph, file); //?
    return { ...acc, [file]: fileI }
}, {}) //?
