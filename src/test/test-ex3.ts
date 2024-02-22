// /// For a file `foo.ts`:
// export const sum
//   = (...a: number[]) =>
//     a.reduce((acc, val) => acc + val, 0);


// /// A simple `foo.test.ts`:

// import { sum } from '../foo';

// test('basic', () => {
//   expect(sum()).toBe(0);
// });

// test('basic again', () => {
//   expect(sum(1, 2)).toBe(3);
// });