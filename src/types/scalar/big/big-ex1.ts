import { Big } from 'big.js';

export const foo = new Big('111.11111111111111111111');

const y: number = Number(foo.toString()); // Loses the precision

export const bar = foo.plus(new Big('0.00000000000000000001'));

// To get a number:
const x: number = Number(bar.toString()); // Loses the precision
