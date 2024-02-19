## Problem statement

Complete the application function.
Our function should use flow to build a person and enrich it with age and country, using the predefined helper functions.

```ts
import {flow} from "fp-ts/function";
type BasicPerson = {
    name: string,
};

type PersonWithAge = BasicPerson & {
    age: number,
};

type PersonWithAgeAndCountry = PersonWithAge & {
    country: string,
}

const buildBasicPerson = (name: string): BasicPerson => ({
    name,
});

const enrichWithAge = (person: BasicPerson): PersonWithAge => ({
    ...person,
    age: person.name.length,
});

const enrichWithCountry = (person: PersonWithAge): PersonWithAgeAndCountry => ({
    ...person,
    country: 'Frediano',
});
// Complete the below function
// const application = (name: string): PersonWithAgeAndCountry => {
//    ...
// };
```

#### Solution

```ts
const application = (name: string): PersonWithAgeAndCountry => {
    return flow(
        buildBasicPerson,
        enrichWithAge,
        enrichWithCountry,
    )(name);
};
console.log(application("Ali"));
```

`Explanation`

Lines 1–7: Create the application function, which uses flow to build a person and enrich it with an age and country.

#### Output

```json
{ name: 'Ali', age: 3, country: 'Frediano' }
```

## Problem statement 2

Complete the application function using the predefined functions.
The function should take the result of the checkInput function.
Call the externalService function, using the errorMapper to handle failures.
Uppercase the result of that call.
Use a getOrElse to prefix We got back an error: to any error we receive.

```ts
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/Task';
import {pipe} from "fp-ts/function";

const checkInput = (input: string) => input === 'invalid' ? E.left('Invalid input') : E.right(input);

const externalService = (input: string) => {
    if (input === 'error') {
        return Promise.reject('Call to external service failed');
    }
    return Promise.resolve('result');
};

const errorMapper = (err: unknown) => err;

const toUpperCase = (input: string) => input.toUpperCase();
// Complete the below function
// const application = (input: string) => {
//     return pipe(
//         checkInput(input),
//         ...
//     )();
// };

```

### Solution

```ts
const application = (input: string) => {
    return pipe(
        checkInput(input), //3
        TE.fromEither,
        TE.chain((input: string) => TE.tryCatch(() => externalService(input), errorMapper)),
        TE.map(toUpperCase),
        TE.getOrElse((err) => T.of(`We got back an error: ${err}`)) //7
    )();
};

```

`Explanation`

Here’s a line-by-line explanation of the solution above:

Line 1: Create the application function.
Line 3: Instruct the functions to take the result of the checkInput function.
Line 5: Call the externalService function, using the errorMapper to handle failures.
Line 6: Uppercase the result of the call above.
Line 7: Use a getOrElse to prefix “We got back an error:” to any error we receive.

