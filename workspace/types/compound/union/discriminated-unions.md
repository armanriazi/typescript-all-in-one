### Discriminated Union

If you have a class with a [*literal member*](./literal-types.md) then you can use that property to discriminate between union members.

As an example consider the union of a `Square` and `Rectangle`, here we have a member `kind` that exists on both union members and is of a particular *literal type*:

```typescript
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle;
```

If you use a type guard style check (`==`, `===`, `!=`, `!==`) or `switch` on the *discriminant property* (here `kind`) TypeScript will realize that the object must be of the type that has that specific literal and do a type narrowing for you :)

```typescript
function area(s: Shape) {
    if (s.kind === "square") {
        // Now TypeScript *knows* that `s` must be a square ;)
        // So you can use its members safely :)
        return s.size * s.size;
    }
    else {
        // Wasn't a square? So TypeScript will figure out that it must be a Rectangle ;)
        // So you can use its members safely :)
        return s.width * s.height;
    }
}
```

### Exhaustive Checks
Quite commonly you want to make sure that all members of a union have some code(action) against them.

```typescript
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

// Someone just added this new `Circle` Type
// We would like to let TypeScript give an error at any place that *needs* to cater for this
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;
```

As an example of where stuff goes bad:

```typescript
function area(s: Shape) {
    if (s.kind === "square") {
        return s.size * s.size;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    // Would it be great if you could get TypeScript to give you an error?
}
```

You can do that by simply adding a fall through and making sure that the inferred type in that block is compatible with the `never` type. For example if you add the exhaustive check you get a nice error:

```typescript
function area(s: Shape) {
    if (s.kind === "square") {
        return s.size * s.size;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else {
        // ERROR : `Circle` is not assignable to `never`
        const _exhaustiveCheck: never = s;
    }
}
```

That forces you to handle this new case : 

```typescript
function area(s: Shape) {
    if (s.kind === "square") {
        return s.size * s.size;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (s.radius **2);
    }
    else {
        // Okay once more
        const _exhaustiveCheck: never = s;
    }
}
```


### Switch
TIP: of course you can also do it in a `switch` statement:

```typescript
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
        default: const _exhaustiveCheck: never = s;
    }
}
```

[references-discriminated-union]:https://github.com/Microsoft/TypeScript/pull/9163

### strictNullChecks


`>tags:` [[Error_NullChecks]] [[Error_Return]] If using ***strictNullChecks** and doing exhaustive checks, TypeScript might complain "not all code paths return a value". You can silence that by simply returning the `_exhaustiveCheck` variable (of type `never`). So:

```typescript
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
        default:
          const _exhaustiveCheck: never = s;
          return _exhaustiveCheck;
    }
}
```

### Throw in exhaustive checks
You can write a function that takes a `never` (and therefore can only be called with a variable that is inferred as `never`) and then throws an error if its body ever executes: 

```typescript
function assertNever(x:never): never {
    throw new Error('Unexpected value. Should have been never.');
}
```

Example use with the area function: 

```typescript
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
		// If a new case is added at compile time you will get a compile error
		// If a new value appears at runtime you will get a runtime error
        default: return assertNever(s);
    }
}
```

### Retrospective Versioning
Say you have a data structure of the form: 

`>tags:` [[DTO]] [[Versioning]]

```typescript
type DTO = {
  name: string
}
```
And after you have a bunch of `DTO`s you realize that `name` was a poor choice. You can add versioning retrospectively by creating a new *union* with *literal number* (or string if you want) of DTO. Mark the version 0 as `undefined` and if you have *strictNullChecks* enabled it will just work out: 

```typescript
type DTO = 
| { 
   version: undefined, // version 0
   name: string,
 }
| {
   version: 1,
   firstName: string,
   lastName: string, 
}
// Even later 
| {
    version: 2,
    firstName: string,
    middleName: string,
    lastName: string, 
} 
// So on
```

 Example usage of such a DTO:

```typescript
function printDTO(dto:DTO) {
  if (dto.version == null) {
      console.log(dto.name);
  } else if (dto.version == 1) {
      console.log(dto.firstName,dto.lastName);
  } else if (dto.version == 2) {
      console.log(dto.firstName, dto.middleName, dto.lastName);
  } else {
      const _exhaustiveCheck: never = dto;
  }
}
```
