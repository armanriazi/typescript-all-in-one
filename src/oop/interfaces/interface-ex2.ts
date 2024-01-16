///
/// ```bash
/// pnpm tsc ./src/oop/interfaces/interface-ex2.ts
/// ```
///
// Lib a.d.ts
interface Point {
    x: number; y: number;
}
/*
declare var myPoint: Point;
*/
//-----------
// Lib b.d.ts
interface Point {
    z: number;
}
declare var myPoint: Point;
// Your code
myPoint.z=2; // Allowed!
myPoint.x=1; // Allowed!
//console.log(`${myPoint.x},${myPoint.z}`);
