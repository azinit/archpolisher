// function identity(it: any) {
//     return it;
// }
// type Fun<K = any, R = any> = (k: K) => R;

// // https://stackoverflow.com/questions/47245774/write-a-function-groupbyarray-callback
// function groupBy<T = any, K = any>(list: T[], Fn: Fun, Pn: Fun = identity) {
//     // @ts-ignore
//     return list.reduce((acc: any, val: K) => {
//         const key = Fn(val);
//         const dict = acc[key] || [];
//         const dictVal = Pn(val);
//         acc[key] = [...dict, dictVal];
//         return acc;
//     }, {})
// }

export const COLORS = ["gray", "red", "green", "blue", "pink", "cyan", "yellow", "magenta", "orange", "brown", "violet", "CornflowerBlue", "Cornsilk", "Coral", "Gold", "FireBrick", "Lime"];
