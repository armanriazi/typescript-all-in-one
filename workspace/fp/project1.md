
# Project of UserResponse
We will have three file here. You only need to remove md describtions and then put it in three ts file.

## tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "build"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*"
  ]
}
```

## domain.ts

```ts
import {iso, Newtype} from "newtype-ts";
import {PositiveInteger} from "newtype-ts/lib/PositiveInteger";
import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
```

```md
Note: We often use the Event suffix for incoming data with the AWS Lambda computing platform because Lambdas are run in response to events. In that case, the above would be UserRegistrationEvent. 
DTO (Data Transfer Object) is another nice suffix, signifying that this is untrusted, outside information.
We’re still on the edge of our domain/application, and **transformations must happen before this DTO becomes a trusted object within our domain.**
```

```ts
export type UserRegistrationDto = {
    firstName: string,
    lastName: string,
    age: number,
    sex: string,
    country: string,
};
```

```md
We should try to change the DTO properties into something more limited and, therefore, easier for the compiler to work with. This is common practice in Domain-Driven Design (DDD). 
We change information from the outside into something suitable for use within the domain. Similarly, anything returned to the outside world is again transformed to be useful to outside parties, in addition to ourselves. 
Let’s take a look at the following example. Although we need to add an extra bit of code, the types we created are powerful.

Before moving on, we should mention that both Gender and Region are called Sum types in functional programming. 
This is a kind of Algebraic Data Type (ADT). Sum types limit the type option to a list of exclusive choices. We can only pick one choice. We’re either children or adults, employed or unemployed. 
A boolean is an example of a sum type with two choices, true or false.
```

```ts
// user registration dto from before
// first attempt at modeling the user = identical to incoming event. the below is better. restricting to valid values
export type Gender = 'M' | 'F' | 'X';

export type Europe = {
    readonly _type: 'Europe',
    // optionally: still keep region here as string. not doing that
}
export type NorthAmerica = {
    readonly _type: 'NorthAmerica',
}
export type Other = {
    readonly _type: 'Other',
}
export type Region = Europe | NorthAmerica | Other;

export interface FirstName
    extends Newtype<{ readonly FirstName: unique symbol }, string> {}
export interface LastName
    extends Newtype<{ readonly LastName: unique symbol }, string> {}

export const firstNameIso = iso<FirstName>();
export const lastNameIso = iso<LastName>();


export type User = {
    firstName: FirstName,
    lastName: LastName,
    age: PositiveInteger,
    gender: Gender,
    region: Region,
};
```

```md
```

```
export type FieldsNotEmpty = (e: UserRegistrationDto)
    => E.Either<string, UserRegistrationDto>;
export type ValidateAge = FieldsNotEmpty;
export type ValidateGender = FieldsNotEmpty;

export type CreateUser = (f: FirstName,
                          l: LastName,
                          a: PositiveInteger,
                          g: Gender,
                          r: Region) => User;
export type FindRegion = (country: string) => O.Option<Region>;
export type FindGender = (sex: string) => O.Option<Gender>;

export type Response = {
    status: number,
    message: string,
};

```


## main.ts

```ts
import {prismPositiveInteger} from "newtype-ts/lib/PositiveInteger";
import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';
import {pipe} from "fp-ts/lib/pipeable";
import {sequenceT} from "fp-ts/lib/Apply";
import {
    Region, Europe, NorthAmerica, Other, UserRegistrationDto, firstNameIso, lastNameIso,
    FieldsNotEmpty, ValidateAge, ValidateGender, CreateUser, FindRegion, FindGender, Response, ValidateNotGerman, User, CustomerType
} from "./domain";

const america: NorthAmerica = {
    _type: 'NorthAmerica',
};
const europe: Europe = {
    _type: 'Europe'
};
const other: Other = {
    _type: 'Other'
};
const countryMappings: Record<string, Region> = {
    Belgium: europe,
    USA: america,
    Germany: europe,
    China: other,
};

const fieldsNotEmpty: FieldsNotEmpty = (e) => {
    return e.firstName && e.lastName && e.age && e.sex && e.country ?
        E.right(e) : E.left('Not all required fields were filled in.');
};
const validateAge: ValidateAge = (e) => {
    return e.age >= 18 && e.age < 150 ?
        E.right(e) : E.left(`Received an invalid age of ${e.age}`);
};
const validateGender: ValidateGender = (e) => {
    return e.sex === 'M' || e.sex === 'F' || e.sex === 'X' ?
        E.right(e) : E.left(`Received an invalid sex ${e.sex}`);
};

const createUser: CreateUser = (firstName, lastName, age, gender, region) => ({
    firstName, lastName, age, gender, region
});
const findRegion: FindRegion = (country) => {
    return countryMappings[country] ? O.some(countryMappings[country]) : O.none;
};
const findGender: FindGender = (sex) => {
    return sex === 'M' || sex === 'F' || sex === 'X' ? O.some(sex) : O.none;
};

// examples
const exampleEvent: UserRegistrationDto = {
    firstName: 'Test',
    lastName: 'McTestFace',
    sex: 'M',
    age: 18,
    country: 'Belgium',
}

const result = pipe(
    fieldsNotEmpty(exampleEvent),
    E.chain(validateAge),
    E.chain(validateGender),
);
// console.log(result)

const first = fieldsNotEmpty(exampleEvent);
const second = E.chain(validateAge)(first)
const third = E.chain(validateGender)(second);
// console.log(third);

// note: still only gives back one error
const eitherSequence = sequenceT(E.either);
const res = pipe(
    eitherSequence(fieldsNotEmpty(exampleEvent), validateGender(exampleEvent), validateAge(exampleEvent)),
    E.map(([a, b, c]) => a)
)
console.log(res)

const sequenceForOption = sequenceT(O.option);

const user = pipe(
    exampleEvent,
    e => sequenceForOption(
        O.some(firstNameIso.wrap(e.firstName)),
        O.some(lastNameIso.wrap(e.lastName)),
        prismPositiveInteger.getOption(e.age),
        findGender(e.sex),
        findRegion(e.country),
    ),
    O.map(([f, l, a, g, c]) => createUser(f, l, a, g, c))
);
// console.log(user);

const internalServerError = (): Response => ({
    status: 500,
    message: 'failed to create',
});
const badRequest = (exception: string): Response => ({
    status: 400,
    message: exception,
});
const createdResponse = (message: string): Response => ({
    status: 201,
    message,
});

function userResponse(u: UserRegistrationDto) {
    return pipe(
        u,
        e => sequenceForOption(
            O.some(firstNameIso.wrap(e.firstName)),
            O.some(lastNameIso.wrap(e.lastName)),
            prismPositiveInteger.getOption(e.age),
            findGender(e.sex),
            findRegion(e.country),
        ),
        O.map(([f, l, a, g, c]) => createUser(f, l, a, g, c)),
        O.map(u => {
            console.log(`Created ${JSON.stringify(u)}. Could now save in db`);
            return createdResponse(`Created ${JSON.stringify(u)}`);
        }),
        O.getOrElse(internalServerError),
    );
}

function flow(u: UserRegistrationDto) {
    return pipe(
        fieldsNotEmpty(u),
        E.chain(validateAge),
        E.chain(validateGender),
        E.map(userResponse),
        E.getOrElse(badRequest),
    );
}
console.log(flow(exampleEvent));
```

## Output

```md
{
  _tag: 'Right',
  right: {
    firstName: 'Test',
    lastName: 'McTestFace',
    sex: 'M',
    age: 18,
    country: 'Belgium'
  }
}
Created {"firstName":"Test","lastName":"McTestFace","age":18,"gender":"M","region":{"_type":"Europe"}}. Could now save in db
{
  status: 201,
  message: 'Created {"firstName":"Test","lastName":"McTestFace","age":18,"gender":"M","region":{"_type":"Europe"}}'
}
```