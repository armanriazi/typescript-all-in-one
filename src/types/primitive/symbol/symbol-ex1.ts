const key1: symbol = Symbol('key1');
const key2: symbol = Symbol('key2');
const obj = {
    [key1]: 'value 1',
    [key2]: 'value 2',
};
console.log(obj[key1]); // value 1
console.log(obj[key2]); // value 2
