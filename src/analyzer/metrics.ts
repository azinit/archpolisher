// import { modGraphOrder, modulesList, FIXTURES } from "shared/fixtures";
import { asModule } from "./fs";

// FIXME: Учесть любую глубину! (возможно тогда нужна другая структура данных)
export function calcAbstractness(file: Module, project: Project): number {
    // TODO: calc weights of abstractness for graph
    // FIXME: calc with overcalcing with considering of abstractness current module (shared > entities > ...)
    const maxOrder = project.modulesOrder.length - 1;
    const abstraItem = project.modulesWeights.find((module) => asModule(file, project.modules) === module.name);
    if (!abstraItem) return -1;
    return abstraItem.order / maxOrder;
}

export function calcInstability(file: Module, project: Project): number {
    // const inDeps = 4;
    // const outDeps = 0;

    // Calc deps by external modules
    const outDeps = project.imports[file].length;
    if (outDeps === undefined) return -1;
    // Calc deps from external modules
    const inDeps = Object.entries(project.imports).filter(([gModule, gDeps]) => {
        // FIXME: redundant?
        if (gModule === file) return false;
        const gResult = gDeps.includes(file);
        return gResult;
    }).length;

    const result = outDeps / (inDeps + outDeps);
    // if (DEBUG) console.log(`Instability[${file}] = ${result} // in=${inDeps}, outDeps=${outDeps}`);
    return result;
}
