
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

Note: We often use the Event suffix for incoming data with the AWS Lambda computing platform because Lambdas are run in response to events. In that case, the above would be UserRegistrationEvent. 
DTO (Data Transfer Object) is another nice suffix, signifying that this is untrusted, outside information.
We’re still on the edge of our domain/application, and **transformations must happen before this DTO becomes a trusted object within our domain.**

We create a User return BasicUser (the TypeScript compiler will already complain about its return) and make addStatus return the real user.
One annoying thing is that we added an optional field that might make using User more difficult. Another approach would be to change the existing type to something like BasicUser or UnvalidatedUser, subsequently reintroducing the User type, but this time with a required customer type as shown below:

```ts
export type BasicUser = {
    firstName: FirstName,
    lastName: LastName,
    age: PositiveInteger,
    gender: Gender,
    region: Region,
};
export type UserRegistrationDto = {
    firstName: string,
    lastName: string,
    age: number,
    sex: string,
    country: string,
};
```

We should try to change the DTO properties into something more limited and, therefore, easier for the compiler to work with. This is common practice in Domain-Driven Design (DDD). 
We change information from the outside into something suitable for use within the domain. Similarly, anything returned to the outside world is again transformed to be useful to outside parties, in addition to ourselves. 
Let’s take a look at the following example. Although we need to add an extra bit of code, the types we created are powerful.

Before moving on, we should mention that **both Gender and Region are called Sum types in functional programming.** 
**This is a kind of Algebraic Data Type (ADT).** Sum types limit the type option to a list of exclusive choices. We can only pick one choice. We’re either children or adults, employed or unemployed. 
A boolean is an example of a sum type with two choices, true or false.

**Product types are another group of ADTs.** Our incoming DTO is an example of a product type, where the possible choices are products of their properties. They’re useful and unavoidable.
The number of possible combinations of values explodes rapidly, though. Also, the more possible values, the less our compiler can help us.
For example, a Purchase that has been paid for (**isPaid is set to true**) will need shipping information. 
We have to make shipping information optional because it isn’t a required part of an unpaid Purchase.
A developer or business expert could now add a shipping address to an unpaid purchase by mistake.
In this instance, the compiler can no longer help us because a shipping address is perfectly acceptable for the Purchase type. This wouldn’t be the case if we use type alias. So, in most situations, **Sum types are superior to (boolean) flags.**

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
```

Here, we pick names and tell the library that these will be newtypes for string.
According to the fp-ts newtype library, performance for its implementation is almost the same as primitive types. So, unless you have a very performance-sensitive application, you should be fine.

```ts
export interface FirstName
    extends Newtype<{ readonly FirstName: unique symbol }, string> {}
export interface LastName
    extends Newtype<{ readonly LastName: unique symbol }, string> {}
```

These aren’t needed yet, but they’ll allow us to transform our newtypes into strings and vice versa.

```ts
export const firstNameIso = iso<FirstName>();
export const lastNameIso = iso<LastName>();
```
Now, we start using both the two newtypes we defined and the built-in PositiveInteger. Now, if we try to pass an ordinary string to our User’s name fields, the compiler will reject them. Only newtypes are good enough for our fancy type!

```ts
export type CustomerType = 'Normal' | 'VIP'; 
export type User = {
    firstName: FirstName,
    lastName: LastName,
    age: PositiveInteger,
    gender: Gender,
    region: Region,
    customerType?: CustomerType, 
};
```


```ts
export type FieldsNotEmpty = (e: UserRegistrationDto)
    => E.Either<string, UserRegistrationDto>;
export type ValidateAge = FieldsNotEmpty;
export type ValidateGender = FieldsNotEmpty;
export type ValidateNotGerman = FieldsNotEmpty;
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
We could’ve used a lens from monocle-ts to change the field. Lenses are pure getters and setters that make it easy to change or retrieve a property from a structure.

```ts
 
import {Lens} from 'monocle-ts'
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
const addStatus = (u: User): User => ({
    ...u,
    customerType: u.gender !== 'M' ? 'VIP' : 'Normal',
});
type AlternativeUser = {
    firstName: FirstName,
    lastName: LastName,
    gender: Gender,
    additionalInfo: {
        personalInfo: {
            age: PositiveInteger,
            region: Region,
        },
        otherInfo: {
            customerType?: CustomerType,
        }
    }
}; 
```

In our case, left (or error) is a string, so we need a semigroup that can combine two strings. There are multiple options, like creating a new string from the concatenation of the two input strings. That said, we’ll change the signature of our functions and start using a string array as our left, which is why we need a **semigroup that can combine arrays**. Luckily, there is a **built-in method for that, which we just imported from the NonEmptyArray module**. See below:

```ts
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
const validateNotGerman: ValidateNotGerman = (e) => {
    return e.country !== 'Germany' ?
        E.right(e) : E.left("We don't like your kind around here");
};
const customerTypeLensAlt = Lens.fromPath<AlternativeUser>()(
    ['additionalInfo', 'otherInfo', 'customerType']); 

const addStatusAlt = (u: AlternativeUser) => {
    const modified = customerTypeLensAlt
        .modify(c => c ? c : u.gender !== 'M' ? 'VIP' : 'Normal');
    return modified(u);
};
console.log(addStatusAlt({gender: 'M', additionalInfo: { otherInfo: {} }} as AlternativeUser))
```

There are several ways of writing this piece of code. We do another validation that tells TypeScript that the string is indeed of type Gender. If the string doesn’t match one of the Gender values, we return none. Alternatively, we could’ve gone for type assertions (sex as Gender) because, at this point, we’re pretty sure we have the right kind of string.

```ts
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
```

Remember, we have to use chain because we’re getting back an Either. Without it, nothing would be flattened and we’d get Either<string, Either<etc>> monstrosities. Note that we’re using point-free style again by only passing in the names of the functions.

The downside of this approach is that we’re creating many variables that only get passed to the next chain. This requires additional typing. We can do a better job with pipe:

We don’t have to pass content into the chains explicitly, and we only need a variable for the result. The more maps and chains, the cleaner this solution becomes compared to the previous approach. Also, with piping, the amount of explicit typing we need is limited compared to other approaches. Note that the checks we defined can be used in many different scenarios and are combined quite elegantly by a pipe.

`Note:` It can be useful to break the above pipe and see what kind of type errors (if any) it starts spewing. What happens if we make a chain return a string or a number? What happens if we return a right with a different kind of value inside?


```ts
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
```

The sequenceT runs multiple functions. The T stands for tuple because that is how we are passing them in. Alternatively, we can use sequenceS, where the S stands for struct, that is, an object.
The recommended way of lifting in fp-ts is somewhat different from many other programming languages/frameworks. We’re advised to use the sequence, as we did for validation.

line of `e => sequenceForOption(...)` & ` O.map()`
In the case of success, each check returns a result (the UserRegistrationDto). So, if everything goes well, we’ll have the same success value five times! We use map to take only the first value of this array of identical DTOs, but picking the second or fifth elements would’ve worked equally well.
We’re again using a pipe to combine various actions. First, we pass in our example event, which is then passed to our sequenceForOption. In that sequence, we call several functions. The first and last names, on lines 9 and 10, must be transformed into the right newtypes because they don’t return an Option. Therefore, we wrap them in one. The following three functions all return Options, so no wrapping is needed. Finally, we use map to pass the results of these functions to createUser.

When we call this pipe with a valid UserRegistrationDto, we get back a user within an Option. If one or more of the functions failed (and returned none), we get back an empty Option. The overall result is nice because all our functions are kept short, clean, and understandable. We also understand the monad constructors (left, right, some, and many others) are called lifting functions because they lift the given value into the monad. Note that map helps us lift functions that deal with ordinary values into the monadic world as well.

```ts
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
```

In the type below, the status will be a 2xx, 4xx, or 5xx number signifying success or failure (similar to HTTP response code), and a message will give additional information. Let’s look at them below. We’ll also add some pure helper functions to create responses.

```ts
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
```

We could factor out some duplication here, but this example is good enough for now. Let’s review an example where we use these functions:

The userResponse function builds our user. It logs a message, which is a stand-in for a call to a database, and builds a response. The response is either a 201 in case of success or a 500 in case of a failure (we assume our validation will stop any errors caused by the user, so a 5xx seems appropriate). We use getOrElse for the latter, which we’ll call the internalServerError function if it’s passed a none. This function either assembles a user and logs, or it becomes empty at some point and goes to the fallback function.

```ts
function userResponse(u: UserRegistrationDto) {
    // almost everything is the same as before
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
        O.map(addStatus), 
        O.map(u => {
            console.log(`Created ${JSON.stringify(u)}. Could now save in db`);
            return createdResponse(`Created ${JSON.stringify(u)}`);
        }),
        O.getOrElse(internalServerError),
    );
}
```

This is our entire workflow brought together. First, we conduct our three checks, fieldsNotEmpty, validateAge, and validateGender. Next, we use the function defined in line 1, userResponse, to create the user and get a response. Finally, we either retrieve the answer from that function or return a 400 ('bad request') if our validation fails. We use Either’s getOrElse, which is similar to that of Option.

```ts
function flow(u: UserRegistrationDto) {
    return pipe(
        fieldsNotEmpty(u),
        E.chain(validateAge),
        E.chain(validateGender),
        E.chain(validateNotGerman),
        E.map(userResponse),
        E.getOrElse(badRequest),
    );
}
console.log(flow(exampleEvent));
```

## Output


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


The functions themselves are pretty neat. Most of them are short and pure. We also avoided exceptions using monads. This makes writing tests easy (few possible paths exist in a one-liner), and combining is a breeze as well. The last two more extensive functions (userResponse() and flow()) are proof of that. With only a little effort, we end with something that reads like a linear story: “Flow is the entry point. We do a few checks first and create a user and an appropriate response. In case of failure, we’ll end up here in the getOrElse and return something fitting.” How’s that for maintainability?

We’re using pipe() a lot, and we already mentioned how this seems to be the default way of handling transformations in fp-ts. We shouldn’t use pipe everywhere, but it might be a good default, and it helps fp-ts with type inference. Piping from one function to the next streamlines our effort (avoiding unnecessary creation of variables, passing of parameters, and so on). It’s readable and easy to reason about. But we might run into situations that don’t fit as well or where another approach would give us more maintainable code. In that case, choose whatever alternative seems more appropriate.
