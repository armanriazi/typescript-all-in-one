///
/// ```bash
/// pnpm tsc src/fp/function/function-ex9.ts --outfile  ./dist/function-ex9.js
/// ```
///
type GoodGuy = 'Minsk';
type BadGuy = 'Irenicus' | 'Bodhi';

function helloInBadWay(badGuy: BadGuy) {
    return `${badGuy} says hello to the child of Bhaal.`
}

console.log(helloInBadWay('Irenicus'));
//  error TS2345: Argument of type '"Minsk"' is not assignable to parameter of type 'BadGuy'.
//console.log(helloInBadWay('Minsk'));