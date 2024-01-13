## References

Beyond literals, any Object in JavaScript (including functions, arrays, regexp etc) are references. This means the following

### Mutations are across all references

[[Error_TS2339]]

```js
var foo = {};
var bar = foo; // bar is a reference to the same object

foo.baz = 123;
console.log(bar.baz); // JS Result: 123, TS Result : Error
```

`> Output:`

```md
error TS2339: Property 'baz' does not exist on type '{}'.
```

### Equality is for references


[[Error_TS2304]]

```js
var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`

console.log(foo === bar); //JS, TS Result: true
console.log(foo === baz); //JS, TS Result: false
```

`> Output:`

```md
error TS2304: Cannot find name 'someglobal'.
```
