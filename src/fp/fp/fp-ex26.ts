/// Problem statement: 
/*
Write a function called safeDivide that takes two parameters called value and divisor, both of type number. 
If the divisor isn’t equal to 0, the function divides the value by the divisor and returns the result wrapped in an option.
Otherwise, the function returns an empty optional.
*/
// Solution:
import {none, some} from "fp-ts/Option";
function safeDivide(value: number, divisor: number) {
    if(divisor != 0) {
        return some(value / divisor);
    }
    return none;
}
console.log(safeDivide(10,5));
console.log(safeDivide(10, 0)); // returns none
console.log(safeDivide(10, 2)); // returns Some containing 5
