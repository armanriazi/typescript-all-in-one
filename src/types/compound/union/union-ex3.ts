///
/// ```bash
/// pnpm tsc ./src/types/compound/union/union-ex3.ts
/// ```
///
type Square = {
    kind: 'square'; // Discriminant
    size: number;
 
};

type Circle = {
    kind: 'circle'; // Discriminant
    radius: number;
};
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Circle | Rectangle;

const area = (shape: Shape) => {
    switch (shape.kind) {
        case 'square':
            return Math.pow(shape.size, 2);
        case 'rectangle': 
            return shape.width * shape.height;            
        case 'circle':
            return Math.PI - Math.pow(shape.radius, 2);
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
};

const square: Square = { kind: 'square', size: 5 };
const circle: Circle = { kind: 'circle', radius: 2 };
const rectangle: Rectangle = { kind: 'rectangle', width:5,  height: 2 };
//const square_error: Square = { kind: 'square_error', size: 5 };
//console.log(area(square_error)); // 25
console.log(area(square)); // 25
console.log(area(circle)); // 12.566370614359172
console.log(area(rectangle)); //10



