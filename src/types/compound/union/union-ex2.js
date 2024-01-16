var x = function (input) {
    switch (input.type) {
        case 'type_a':
            return input.value + 100; // type is A
        case 'type_b':
            return input.value + 'extra'; // type is B
    }
};
var i = { type: 'type_b', value: 'Hello' };
;
console.log("".concat(x(i)));
