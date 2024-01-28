
type MyKeys = `key-${string}`;
type MyObject = {
    [key: MyKeys]: number;
};

const obj: MyObject = {    
    'key-a': 123,
    'key-b': 456,
};

console.log(obj['key-a']); // 123
console.log(obj['key-b']); // 456
