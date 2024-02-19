## Tagless Final

We could summarize tagless final by saying that it raises the level of abstraction of our program, specifically in regard to our use of monads. When we develop our DSL, our domain-specific mini-language, we often base it on monads. An example would be when we have to validate or do any kind of I/O. In previous chapters, we used the existing fp-ts monads like Either or Task directly as return types. In the tagless final, we’d instead declare a new abstract return type by convention called F. This F can’t be just about anything. It should definitely be a monad, and we might limit its type even further. On the other hand, it’s much less specific than using one particular monad.
Advantages of tagless final

The advantages we gain from this abstraction are two-fold. First, by using monads as a basic element in our applications, we can easily chain operations. In many of the other languages where the tagless final is popular (like Scala or Haskell) this is accomplished using do notation. Second, our code doesn’t depend on one specific monad. We can run it with whatever we want, as long as it fits the requirements we specified. In fact, we need a so-called interpreter for F to actually run the program we defined. An obvious advantage of this is that we can pull in a fake interpreter when we want to test our code, replacing IO with mocks, and so on.

`Note:` Do notation is also available within fp-ts, but it’s less fluent, and we might still prefer piping.

Interesting to note is that one of the people who made tagless final popular in the Scala world now seems to be advising against its use. He’s come to believe that it’s overkill for most projects and “premature indirection,” a level of abstraction that might sound good but won’t serve any practical use.


## Domain-specific languages

### main.ts

```ts
import {count, dollars, euros} from "./bankdsl"

console.log(count(
    dollars(2),
    euros(5),
    dollars(1),
))
```

### bankdsl.ts

```ts
type Dollar = {
    _type: 'dollar'
}
type Euro = {
    _type: 'euro'
}

type Currency = Dollar | Euro;

type Money = {
    amount: number,
    currency: Currency,
}
export const dollars = (amount: number): Money => ({
    amount,
    currency: {
        _type: 'dollar',
    }
});

export const euros = (amount: number): Money => ({
    amount,
    currency: {
        _type: 'euro',
    }
});
export function count(...ms: Money[]) {
    return ms.reduce((acc, curr) => {
        if (curr.currency._type === 'dollar') {
            acc.dollars += curr.amount;
        } else {
            acc.euros += curr.amount;
        }
        return acc;
    }, {dollars: 0, euros: 0});
}
```

Note that JavaScript and TypeScript aren’t ideal as languages for a fluent DSL, partly because they lack infix operators. In languages like Haskell, Purescript, or Kotlin, we can do something like this (after creating infix functions count, dollars, euros, and and):

```bash
count 2 dollars and 3 euros
```

But TypeScript doesn’t support infix because JavaScript doesn’t. So, our DSLs are, unfortunately, less readable. Furthermore, the difference between the above and what we were doing in previous chapters is subtle. We’re thinking even more about naming. What will make our code easy to understand by outsiders and non-technical people? We’re thinking about ease of use as well. That is, how can we make creating Money as simple as possible (using, among other things, our smart constructors)? Do we have to force the users of our language to pass an array to count? No, use the spread operator, and they can pass in anything they like, as long as it’s money. Somewhat less important in our example is what information we expose. We export those functions our users need, like methods for creating amounts in dollars or euros. We don’t see a reason for them to create a currency directly, so we hide that.

A large application written in FP, using DSLs, would consist of code organized in modules with clear responsibilities or a single concern (like handle authentication). Each module offers a DSL that simplifies usage, at the same time hiding implementation details. A developer who has a need for something like authentication doesn’t have to dive into the code. They turn to the DSL. This method is good for keeping the code manageable, organized, and understandable. In FP, the mini-language we create is often called an Algebra. In our above example, count is part of the Algebra of our application.

You can write your DSL with the techniques we saw in previous chapters. Or you can turn to some more advanced techniques discussed in the upcoming lessons. And, like anything advanced that we’ve seen so far, those techniques revolve around the use of monads.

## Free Monads
Free monads are, in some ways, very similar to the tagless final. In essence, they allow us to turn any functor (the part of a monad that has a map) into a monad, thereby gaining of and chain functionality without any additional work.

This is in itself already quite nifty, but free monads can also be used to build our application as an Abstract Syntax Tree (AST). First, create the functor, which consists of the commands that are important in our application (think of this as a DSL). Next, lift it so that it becomes a free monad. Now we can combine the commands we just created in our program. This will, yet again, look nicer in a language like PureScript or Haskell. But it will work just the same in TypeScript, and it might make our application code more readable and usable.
We’re not finished, though. Our code won’t actually do anything yet! For that, we need to again write an interpreter that will give meaning to each of our commands. This gives us an advantage when it comes to mocking. There are drawbacks as well, besides the added complexity. For one, the recursive nature of this solution means that we might trigger a stack overflow. Even if we avoid this by using trampolining, our solution won’t win any performance prizes. So, don’t use this solution unless you think your domain or application (and its complexity) warrants it.

Some applications are based on a previous version of fp-ts, but most changes required to make these examples work are simple enough. For example, instead of calling chain on our monad, we should now use a pipe to combine chains (as we’ve seen countless times in the previous pages), and Free is now located in the fp-ts-contrib library.


## Executable and Declarative Encoding and Algebraic Design

### Executable vs. declarative encoding

Executable encoding is most similar to what we’ve done in previous chapters, while declarative encoding is similar to the two techniques we just discussed. Our DSL is just data that needs interpretation and can have multiple interpreters, and we have the option to define more of them whenever we desire. While the former is simpler, the latter has more power and flexibility.

### Algebraic design

Another term worth mentioning is algebraic design. An algebra (mentioned earlier in this chapter) is a group of functions that work with certain types of data, with an accompanying set of laws. We design our application starting with this algebra. Only later do we decide on a representation for it. We create types, which serve as our interface, and later write an implementation for it all. Once again, the idea is to first clearly model our domain. The actual implementation is of no concern yet. In fact, working on it might distract us. This is similar to TDD, where we focus on working on what we want to accomplish through writing tests before we turn to the how.

John A De Goes writes: “Most functional code doesn’t solve problems directly. Instead, it creates models of solutions to problems, which are later executed (or interpreted).”


## Coding Challenge: Create a Mini DSL
### Problem statement

Let’s create a mini DSL that makes it easier to create (correct) flights for an airport.

Notice that we’ve already defined a couple of useful types. Flights have different properties, depending on whether they’re arrivals or departures, so we have a separate type for each.
We’ve also written a smart constructor for airplane. This ensures that we can only create a valid airplane, refusing to create one with missing and essential information like the number of seats.

The createFlight function is another smart constructor, but it’s not yet implemented. We must accomplish the following:

    Add the signature (parameters and types).
    In the body, first check that all parameters are defined.
    Return an arrival or departure flight (preferably using a switch with an exhaustive check).

The application function should help us fill in the signature of createFlight.

```ts
import * as O from 'fp-ts/Option';
import {pipe} from "fp-ts/function";

type Airplane = {
    seats: number,
};

type ArrivalFlight = {
    type: 'Arrival',
    arrivalTime: Date,
    airplane: Airplane,
};

type DepartureFlight = {
    type: 'Departure'
    departureTime: Date,
    airplane: Airplane
}

type Flight = ArrivalFlight | DepartureFlight;

type KindOfFlight = 'ARRIVAL' | 'DEPARTURE';

const createAirplane = (seats: number): O.Option<Airplane> => {
    return seats && seats > 0 ? O.some({
        seats
    }) : O.none;
};
// Complete the below function
// const createFlight = ... => {
//     ...
// };

const application = (): O.Option<Flight> =>
    pipe(
        createAirplane(100),
        O.chain((res: Airplane) => createFlight('ARRIVAL', new Date())(res))
    );
```

#### Solution

```ts
const createFlight = (typeOfFlight: KindOfFlight, date: Date) => (airplane: Airplane): O.Option<Flight> => {
    if (!typeOfFlight || !date || !airplane) {
        return O.none;
    }

    switch (typeOfFlight) {
        case 'ARRIVAL': {
            return O.some({
                type: 'Arrival',
                arrivalTime: date,
                airplane,
            });
        }
        case 'DEPARTURE': {
            return O.some({
                type: 'Departure',
                departureTime: date,
                airplane,
            });
        }
        default:
            const _exhaustiveCheck: never = typeOfFlight;
            return _exhaustiveCheck;
    }
};
console.log(createFlight("ARRIVAL",new Date())({seats:100}));
```