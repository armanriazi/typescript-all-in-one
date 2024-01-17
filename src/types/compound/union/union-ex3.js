var area = function (shape) {
    switch (shape.kind) {
        case 'square':
            return Math.pow(shape.size, 2);
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI - Math.pow(shape.radius, 2);
    }
};
var square = { kind: 'square', size: 5 };
var circle = { kind: 'circle', radius: 2 };
var rectangle = { kind: 'rectangle', width: 5, height: 2 };
var square_error = { kind: 'square_error', size: 5 };
console.log(area(square)); // 25
console.log(area(square_error)); // 25
console.log(area(circle)); // 12.566370614359172
console.log(area(rectangle)); //10
