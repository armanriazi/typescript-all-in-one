///
/// ```bash
/// pnpm tsc ./src/oop/interfaces/interface-ex1.ts
/// ```
///
// Sample A
declare var myPoint: { x: number; y: number; };

// Sample B
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;