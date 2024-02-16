TypeScript provides dedicated type syntax for arrays to make it easier for you to annotate and document your code. The syntax is basically postfixing `[]` to any valid type annotation (e.g. `:boolean[]`). It allows you to safely do any array manipulation that you would normally do and protects you from errors like assigning a member of the wrong type.  This is demonstrated below:

```typescript
var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = 'false'; // Error!
boolArray = 'false'; // Error!
boolArray = [true, 'false']; // Error!
```

## Creating arrays

Creating an empty array is super easy: 

```typescript
const foo: string[] = [];
```

If you want an array to loop over: 

```typescript
[...new Array(6)]; 
```

If you want to create an array pre-filled with some content use the ES6 `Array.prototype.fill`: 

```typescript
const foo: string[] = new Array(3).fill('');
console.log(foo); // ['','',''];
```

If you want to create an array of a predefined length with calls you can use the spread operator: 

`>tags:` #Loop_Over [[Array]] #Map [[Important]] #Triple_Dot

```typescript
const someNumbers = [...new Array(3)].map((_,i) => i * 10);
console.log(someNumbers); // [0,10,20];
```

## Index Signatures

In TypeScript we can use as index signature `string`, `number`, and `symbol`:

```typescript
type K = {
    [name: string | number]: string;
};
const k: K = { x: 'x', 1: 'b' };
console.log(k['x']);
console.log(k[1]);
console.log(k['1']); // Same result as k[1]
```

Please note that JavaScript automatically converts an index with `number` to an index with `string` so `k[1]` or `k["1"]` return the same value.