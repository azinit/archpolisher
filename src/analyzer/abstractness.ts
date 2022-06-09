import { modGraphOrder, modulesList, FIXTURES } from "shared/fixtures";
import { asModule } from "./module";

type ModulesWeight = {
    name: string;
    order: number;
};

// FIXME: Учесть любую глубину! (возможно тогда нужна другая структура данных)
export const modGraphVector: ModulesWeight[] = modGraphOrder.map((mgIt, idx) => {
    // if (typeof mgIt === "string") {
    //     return { name: mgIt, order: idx };
    // };
    // // FIXME: isArray?
    return mgIt.map(it => ({ name: it, order: idx }));
}).flat(); //?

// FIXME: refine params
export function calcAbstractness(file: Module): number {
    // TODO: calc weights of abstractness for graph
    // FIXME: calc with overcalcing with considering of abstractness current module (shared > entities > ...)
    const maxOrder = modGraphOrder.length - 1;
    const abstraItem = modGraphVector.find((module) => asModule(file, modulesList) === module.name);
    if (!abstraItem) return -1;
    return abstraItem.order / maxOrder;
}

calcAbstractness(FIXTURES.HEADER); //? 0.00
calcAbstractness(FIXTURES.PG_AUTH_UI); //? 0.25
calcAbstractness(FIXTURES.FE_AUTH_HOOKS); //? 0.50
calcAbstractness(FIXTURES.SH_GET_ENV); //? 0.75
