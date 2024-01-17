
type Dictionary<T> = {
    [key: string]: T;
};
const myDict: Dictionary<string> = { a: 'ia', b: 'ib' };
console.log(myDict['a']); // Returns a
