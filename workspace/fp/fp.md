## Functional Programming
In any programming language, functions are said to be **first-class citizens** if they can be treated like any other variable. For instance, they can be passed as an argument to other functions, can be returned by another function, and can be assigned as a value to a variable.

What are not the advantages of types? Types make code compilation faster.

In functional programming, we write programs by letting objects interact with each other is a myth.

What are the advantages of functional programming?

- [x] Functional programming helps us deal with parallel programming.
- [x] Functional programming makes managing complex applications easier.

To write functional code in JavaScript, we can turn to **libraries such as Lodash, Ramda, or Folktale.**
We’ve already discussed Ramda Ramda and Folktale, but unfortunately, they’re insufficient. Ramda lacks the extremely useful concept of monads, on which several more advanced functional programming techniques are based. Folktale is a small library with some of the essential monads, but it has very few other features. It lacks some more powerful functional programming features like monad transformers. Another disadvantage of Folktale is that the library hasn’t received much support during the last few years.

Instead, we’ll use a TypeScript library called **fp-ts**. It has several advantages:

- [x] It’s written in TypeScript.
- [x] It has many stars on GitHub.
- [x] It’s actively maintained.
- [x] It has powerful monads.
- [x] It has an ecosystem of libraries that add even more functionality.

### Statement vs Expression
What is the difference between a statement and an expression?
An expression always produces a value; a statement does not.

## Setup
However, be sure to set the target property in tsconfig.json no lower than es6. Later on, we will use webpack to build our output and show the tsconfig.json file that goes with that setup.

```bash
pnpm i --save fp-ts@~2.8.6
```



## Closure
Closures can be used to **hide information** from other functions.
The behaviour depicted in the code snippet below is called closure. With closures, the inner function has access to all the information available in the outer function. This is why the value of the parameter outer is still available when we call ourInnerFunction that was returned from withInnerFunction.
The functions receiving or returning other functions are called **higher-order functions**.

```ts
function withInnerFunction(outer) {
    return function ourInnerFunction(inner) {
        console.log(`Outer function received ${outer}, inner got ${inner}`);
    };
}

const returnedFunction = withInnerFunction('a');

// some time later in our program, we actually need to call returnedFunction 
returnedFunction('b');
```

To:

```ts
const withInnerFunction = (outer) => (inner) => console.log(`Outer function received ${outer}, inner ${inner}`);
const returnedFunction = withInnerFunction('a');
returnedFunction('b');
```

This is interesting because it allows us to pass additional information that might **serve as an environment or state into our function.** Closures and first-class functions allow for more interesting behavior such **as creating factories for building functions, keeping parameter lists short, reducing code duplication, and so on**. Furthermore, *closures are the only way to make a variable private in JavaScript because we can circumvent all the other methods.*


Note: Arrow functions are essentially the same as functions defined using the function keyword, except when it comes to the this keyword. However, we will not use the this keyword in this course.


### ADTs | Pipes
Algebraic data types (ADTs) in functional programming can be extremely useful. We’ll discuss them in detail later on. However, in TypeScript, we can use **discriminating unions (also called tagged unions) to get sum types**. These sum types are a category of ADTs, and creating them does require a bit of ceremony, though. In a language like Haskell, we can make very powerful pattern matching on sum types. There are libraries in the fp-ts ecosystem that try to add some of this power to TypeScript, e.g., **morphic-ts**. However, TypeScript can already do some cool things with these unions.


## Pure Function
A pure function is one with a result that’s based solely on the input it receives. So, as long as the input doesn’t change, the output doesn’t change either. This means that it has **no side effects**.

## Referential Transparency
A related concept, referential transparency, also helps us in coding. It means that we can replace a function call with the value it produces. 

```ts
function biggerProgram() {
    const result = addOne(5);
    return result * 2;
}
```

## Immutability

Immutability is another frequently mentioned element of functional programming. **Instead of changing our existing data structures, we create new data structures** whenever we change any information. This makes reasoning easier. No other process could’ve changed the array we just received from our function because it’s an entirely new data structure! We can see another obvious advantage of immutability in parallel programming. In the words of Adam Smith, “Threads coming together with mutable data ends in a conspiracy against your sanity”.

Note: Even when we’re not doing any fancy parallel programming, some easily **missed mutability bugs can waste our time**. For instance, *let’s assume we have arrays of the const type, and we’re using shift to get the first element of those arrays. The usage of shift mutates our arrays in place. Such bugs can cause problems within our program.*

**Performance may suffer in some cases**, especially when our language isn’t written for immutability. As always, this is a matter of trade-offs. Is excellent performance essential, or is the combination of a lack of bugs, easier maintenance, and decent performance acceptable?

Note: **JavaScript, sadly, wasn’t written with immutability in mind**. Therefore, several *libraries offer to add immutable data structures.* It’s better to have the language handle everything for us, though, despite the loss of immutability.

## Declarative programming style
Functional programming tries to lift this behavior to a higher level of **abstraction**. Whenever possible, the low-level behavior is left to the computer.
First, functional programming offers a more **declarative** style of programming. Object-oriented programming has an **imperative** feel because our program consists of a list of instructions to execute (or objects to execute). 
Declarative: I want a dinner with chicken.
Imperative: Kitchen -> Open Fridge ->  Removing Chicken from Fridge -> Dinner on the table.

Declarative example:

```ts
const exampleArray = [1, 2, 3, 4];

function addOneToEach(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1; //mutable data structures
    }
    return arr;
}

console.log(addOneToEach(exampleArray));
```

Imperative example:

```ts
const exampleArray = [1, 2, 3, 4];

function fpAddOneToEach(arr) {
    return arr.map(el => el + 1); // add 1 to each element of array, immutable data structures
}

console.log(fpAddOneToEach(exampleArray));
```

**Another advantage of higher-order functions is that they often use immutable data structures**. 
**The loop in the first example above, on the other hand, mutates the existing array and is error prone(imperative)**

Note: Modify the second code snippet above and include the loop version (from the first example), followed by the functional programming version (from the second example). Notice how the functional programming version now returns [3, 4, 5, 6] instead of [2, 3, 4, 5]. This is because the exampleArray has been modified by the loop version.

## Tacit programming
Recall composition and our addOne function from an earlier example. Using it within map is trivial, as shown below.

```ts
const exampleArray = [1, 2, 3, 4];

function addOne(el) {
    return el + 1;
}

function fpAddOneToEach(arr) {
    return arr.map(addOne);
}

console.log(fpAddOneToEach(exampleArray));
```

The above is called **point-free style or tacit programming**. The function we passed in expects one argument, and map produces one. We don’t have to write `el => addOne(el)` because JavaScript knows it has to pass the incoming value to the function.

So, with **higher-order functions like filter and map**, *we only have to write logic that filters or transforms a single element. The rest is handled by the higher-order function*. 
We know how to increment a single value, and we can now handle arrays without writing any additional code!

Additionally, in functional languages, maps are available for more than just arrays, further extending the usefulness of this function. Because functions like **map and filter are more abstract** and less bound to specifics, they can be applied in many situations. They work with any kind of array we throw at them. In contrast, the object methods only know how to do things for one specific class. 

`The corresponding Javadoc mentions the following:`

- [x] Stream pipeline results may be **nondeterministic or incorrect** if the behavioral parameters to the **stream operations are stateful**.
- [x] Side effects in behavioral parameters to stream operations are, in general, discouraged, as they can often lead to unwitting violations of the statelessness requirement, as well as other thread-safety hazards.

In summary, choose pure functions for reliable behavior when using streams. The Javadoc notes in several locations that this is also a requirement for parallelism, for reasons that are no longer a mystery. That is, pure functions behave in a predictable fashion. However, with side effects and mutations, the result might be unpredictable.


## Recursion
Recursion is another way that functional programming deals with repetition and avoiding loops. Recursion means **solving a problem by breaking it up into smaller problems**.

Recursion often leads to elegant solutions for complicated problems. However, it’s not frequently used in mainstream languages like JavaScript because the **repeated function calls cause the stack to grow**, possibly resulting in a stack overflow. In this course, we’ll mainly use **higher-order functions to solve problems involving repetition.**