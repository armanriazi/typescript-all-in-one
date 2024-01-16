
## Creating arrays

Creating an empty array is super easy: 

```ts
const foo: string[] = [];
```

If you want an array to loop over: 

```ts
[...new Array(6)]; 
```

If you want to create an array pre-filled with some content use the ES6 `Array.prototype.fill`: 

```ts
const foo: string[] = new Array(3).fill('');
console.log(foo); // ['','',''];
```

If you want to create an array of a predefined length with calls you can use the spread operator: 

`>tags:` #Loop_Over [[Array]] #Map [[Important]] #Triple_Dot

```ts
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