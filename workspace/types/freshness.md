
* [Freshness](#freshness)
* [Allowing extra properties](#allowing-extra-properties)
* [Use Case: React](#use-case-react-state)

### Strict Object Literal Checking (Freshness)

Strict object literal checking, sometimes referred to as “freshness”, is a feature in TypeScript that helps catch excess or misspelled properties that would otherwise go unnoticed in normal structural type checks.

When creating an object literal, the TypeScript compiler considers it “fresh.” If the object literal is assigned to a variable or passed as a parameter, TypeScript will throw an error if the object literal specifies properties that do not exist in the target type.

However, “freshness” disappears when an object literal is widened or a type assertion is used.

TypeScript provides a concept of **Freshness** (also called *strict object literal checking*) to make it easier to type check object literals that would otherwise be structurally type compatible.

Here are some examples to illustrate:

```typescript
type X = { a: string };
type Y = { a: string; b: string };

let x: X;
x = { a: 'a', b: 'b' }; // Freshness check: Invalid assignment
var y: Y;
y = { a: 'a', bx: 'bx' }; // Freshness check: Invalid assignment

const fn = (x: X) => console.log(x.a);

fn(x);
fn(y); // Widening: No errors, structurally type compatible

fn({ a: 'a', bx: 'b' }); // Freshness check: Invalid argument

let x: { a: string } = { a: 'a' };
let y: { a: string; b: string } = { a: 'a', b: '' };
x = y; // Widening: No Freshness check
```


Structural typing is *extremely convenient*. Consider the following piece of code. This allows you to *very conveniently* **upgrade your JavaScript to TypeScript** while still preserving a level of type **safety**:

```typescript
function logName(something: { name: string }) {
    console.log(something.name);
}

var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: `I don't have a name property` };

logName(person); // okay
logName(animal); // okay
logName(random); // Error: property `name` is missing
```

However, *structural* typing has a weakness in that it allows you to misleadingly think that something accepts more data than it actually does. This is demonstrated in the following code which TypeScript will error on as shown:

```typescript
function logName(something: { name: string }) {
    console.log(something.name);
}

logName({ name: 'matt' }); // okay
logName({ name: 'matt', job: 'being awesome' }); // Error: object literals must only specify known properties. `job` is excessive here.
```

Note that this error *only happens on object literals*. Without this error one might look at the call `logName({ name: 'matt', job: 'being awesome' })` and think that *logName* would do something useful with `job` where as in reality it will completely ignore it.

Another big use case is with interfaces that have optional members, without such object literal checking, a typo would type check just fine. This is demonstrated below:

```typescript
function logIfHasName(something: { name?: string }) {
    if (something.name) {
        console.log(something.name);
    }
}
var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

logIfHasName(person); // okay
logIfHasName(animal); // okay
logIfHasName({neme: 'I just misspelled name to neme'}); // Error: object literals must only specify known properties. `neme` is excessive here.
```

The reason why only object literals are type checked this way is because in this case additional properties *that aren't actually used* is almost always a typo or a misunderstanding of the API.

### Allowing extra properties

A type can include an index signature to explicitly indicate that excess properties are permitted:

```typescript
var x: { foo: number, [x: string]: unknown };
x = { foo: 1, baz: 2 };  // Ok, `baz` matched by index signature
```


### Use Case: React State

[Facebook ReactJS](https://facebook.github.io/react/) offers a nice use case for object freshness. Quite commonly in a component you call `setState` with only a few properties instead of passing in all the properties, i.e.: 

```typescript
// Assuming
interface State {
    foo: string;
    bar: string;
}

// You want to do: 
this.setState({foo: "Hello"}); // Error: missing property bar

// But because state contains both `foo` and `bar` TypeScript would force you to do: 
this.setState({foo: "Hello", bar: this.state.bar});
```

Using the idea of freshness you would mark all the members as optional and *you still get to catch typos*!: 

```typescript
// Assuming
interface State {
    foo?: string;
    bar?: string;
}

// You want to do: 
this.setState({foo: "Hello"}); // Yay works fine!

// Because of freshness it's protected against typos as well!
this.setState({foos: "Hello"}); // Error: Objects may only specify known properties

// And still type checked
this.setState({foo: 123}); // Error: Cannot assign number to a string
```
