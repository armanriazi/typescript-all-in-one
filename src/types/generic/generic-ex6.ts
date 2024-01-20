

interface Array<T> {
    reverse(): T[];
    // ...
}

function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
//reversed[0] = '1';     // Error!
//reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay


console.log(reversed); // 1,2


var numArr = [1, 2];
var reversedNums = numArr.reverse();
console.log(reversedNums); // 2,1
//reversedNums = ['1', '2']; // Error!