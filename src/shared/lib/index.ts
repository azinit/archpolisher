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

export const BLUE_COLORS = ["gray", "#B6D0E2", "#A7C7E7", "#7393B3", "#4682B4", "#6082B6", "#6495ED", "#0096FF", "#1434A4", "#3F00FF", "#000080", "#0437F2", "#0818A8", "#40B5AD", "#008080", "#40E0D0", "#96DED1", "#00A36C", "#9FE2BF", "#C1E1C1", "#ECFFDC", "#AFE1AF", "#90EE90", "#98FB98"]