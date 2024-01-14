interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }
function iTakePoint3D(point: Point3D) { /* do something */ }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint3D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing information `y`
//iTakePoint3D(point2D); // Error

console.log(`${point2D.x},${point2D.y}`);

console.log(`${point3D.x},${point3D.y}`);