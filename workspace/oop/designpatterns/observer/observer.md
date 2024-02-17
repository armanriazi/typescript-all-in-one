## Observer

One of the most powerful and popular JavaScript libraries that specializes in event processing is the Reactive Extensions for JavaScript library, or simply RxJS.

What is an Observable in the context of RxJS?
**It’s an object that emits values over time.**

What is the purpose of the pipe operator in RxJS?
**To transform the values emitted by an Observable.**

**RxJS uses the Gang of Four (GoF) design pattern**, named the Observable pattern, as the basis for registering interest in an event, as well as doing something when an event has been triggered. Along with these basic principles of the Observer design pattern, RxJS provides a plethora of utility functions to transform event data as and when it comes in.

At the heart of the RxJS library is the concept of Observables, which are source event streams. This has given rise to using the term Observables to describe RxJS source streams and what can be done to them. So when someone says use Observables, they really mean use the RxJS library with its source streams and utility functions.

We will explore Observables, which really means the RxJS library, how it is used, and how it can help us when working with **event-based or asynchronous data**.
 **In essence, subscribers are alive as long as the Observable stream is emitting values.**

### Pipe
The RxJS library provides a pipe function to all Observables, **similar to the subscribe function**. This pipe function takes a variable number of functions as parameters and will execute these functions on each value that is emitted by the Observable.

The functions that are provided to **the pipe function are generally known as Observable operators**, which all accept an Observable as input, and return an Observable as output. The pipe function emits an Observable stream.The pipe function allows us to combine multiple operator functions, which will each be applied to the values emitted by an Observable.

### Avoid Swallowing Values
because the map function does not return a value, our subscribe function on line 8 must define the type of the incoming value parameter as void.
Unfortunately, the emitted value will be undefined because we have not returned anything within our map function.

```ts
import { map, of } from "rxjs";
const emitOneTwo = of(1, 2); // create an Observable that emits 1 and 2
const swallowedValues = emitOneTwo.pipe(
  map((value: number) => {
    console.log(`swallowing ${value}`); // log value but don't return it
    // not returning a value;
  })
);
swallowedValues.subscribe((value: void) => {
  console.log(`subscriber received value: ${value}`); // log the void value received
});
```

Solution:

```ts
// Observable emitting values of type number or null
const swallowedValues: Observable<number | null> =
  emitOneTwo.pipe(
    // Map emitted values based on a condition
    map((value: number) => {
      if (value < 2) {
        return null;
      }
      return value;
    })
  );

// Subscribe to the Observable and log received values
swallowedValues.subscribe((value: number | null) => {
  console.log(`subscriber received value: ${value}`)
});

```

Failing to return a value will automatically make the entire Observable return a type of unknown.

It is, therefore, good practice to strongly type the parameters of subscribe functions so that we know what value we are expecting an Observable to emit.


### The mergeMap operator
`>tags:` [[Important]] [[Observer]] [[MergeMap]] [[Operator]] [[Subscribe]]
The mergeMap operator is used to return a single value from an Observable stream, so that we do not need to subscribe to the inner Observable.

`Ref.To Observer-ex10-11`

```ts
productList
  .pipe(
    // Map each product ID to an Observable of its name and description
    map((value: IProductId) => {
      console.log(`Product id: ${value.id}`); // Log the product ID
      return getProductName(value.id); // Return an Observable of the product name and description
    })
  )
  .subscribe((value: Observable<IProductDescription>) => {
    // Subscribe to each Observable of product names and descriptions
    value.subscribe((value: IProductDescription) => {
      console.log(`product name : ${value.name}`); // Log the product name
      console.log(`product desc : ${value.description}`); // Log the product description
    });
  });
```

To:

```ts
productList.pipe(
  // Use mergeMap to flatten the nested Observable stream returned by getProductName
  mergeMap((value: IProductId): Observable<IProductDescription> => {
    // Log the current product ID
    console.log(`Product id: ${value?.id}`);
    // Use getProductName to fetch the name and description of the current product
    return getProductName(value.id);
  })
).subscribe((value: IProductDescription) => {
  // Log the name and description of each product returned by getProductName
  console.log(`product name : ${value.name}`)
  console.log(`product desc : ${value.description}`)
});
```

Note: The code for this mergeMap function is identical to our earlier map function, where it logs a message to the console and then calls the getProductName function with the id property of the value passed in as an argument. The difference between this code sample and the previous code sample is in the subscribe function.

### ConcatMap Operator
`>tags:` [[Important]] [[ConcatMap]]
We are receiving values emitted by the Observable based on the time that they were emitted.
Note, too, that we have three emit events followed by three receive events. This means that each value received by the delayedEmit Observable is processed immediately.
If it is important to process the emitted values in order, no matter when they arrive, we can use the concatMap function **instead of the mergeMap function**.

```ts
import { concatMap, delay, of } from "rxjs";

// Create an observable that emits values 3, 2, 1
const emitTreeTwoOne = of(3, 2, 1);

// Create a new observable that delays each emission from emitTreeTwoOne based on its value
const delayedEmit = emitTreeTwoOne.pipe(
  concatMap((value: number) => {
    console.log(
      `>> emit >>
       ${new Date().toLocaleTimeString()}
       value: ${value},
       delaying: ${1000 * value} ms`
    );
    // Emit the value after a delay
    return of(value).pipe(delay(1000 * value))
  })
);

// Subscribe to the delayedEmit observable to receive its emissions
delayedEmit.subscribe(value => {
  console.log(`<< receive <<
    ${new Date().toLocaleTimeString()}
    received value: ${value}`);
});
```

`> Output witch concatMap:`

```md
>> emit >>
...
<< receive <<
>> emit >>
...
<< receive <<
```

`> Output witch mergeMap:`

```md
>> emit >>
...
>> emit >>
...
<< receive <<
<< receive <<
```

### forkJoin in RxJS

`>tags:` [[Important]] [[ForkJoin]]

**forkJoin operator can be used to combine the latest values emitted by two or more Observables.**
When we have a number of Observable streams that need to all complete before we do something, we can use the forkJoin function. This situation occurs quite often when dealing with REST requests at the start of a page load, where the page may need to load data from a number of different REST APIs before displaying the page.
Let’s assume that we are building a web page to show products available in a catalog.

What might we want on this page?

- [x] We may need one REST request that loads a store catalog based on the current date and another REST request that loads sales specials for the day.
- [x] Our page may want to display the sale items on the top of the page or in a scrolling banner, as well as all store items in the main body of the page.
- [x] We may also need a further REST request to load information related to the customer, such as their logged-in status or their country of origin.
- [x] Only **when all of these requests have been completed can we display the page in full** and allow the customer to add items to their shopping basket.

**forkJoin solves timing issues with multiple streams**

Let’s see how the forkJoin function helps in this case:

```ts
const threeNumbers: Observable<number[]> //= ...
const twoStrings: Observable<string[]> //= ...
forkJoin(
  [threeNumbers, 
     twoStrings]
).subscribe(
([threeNumbersOutput, twoStringsOutput]) => {
  console.log(`<< threeNumbersOutput: ${threeNumbersOutput}`);
  console.log(`<< twoStringsOutput: ${twoStringsOutput}`);
}
);
```


### Multicasting with the Subject class

`>tags:` [[Important]] [[Subject]] [[Subscriber]] [[Observer]] #Event_Bus

So, what if we want to keep an Observable stream open and register one or more subscribers that will wait around until a new value is emitted? Think in terms of an event bus, where multiple subscribers register their interest in a topic on an event bus and then react when an event is raised that they are interested in. RxJS provides the Subject class for this express purpose.

A Subject maintains a list of listeners that have registered their interest. A Subject is also an Observable stream, and therefore, listeners can subscribe to the stream and use the same syntax and functions that are used for normal Observable streams.

What makes a Subject interesting is that it has the ability to multicast, which means that it **allows multiple subscribers to the same stream and will notify all interested subscribers when an event happens.**

```ts
//...
class Listener {
  private eventSubscription: Subscription;
  constructor(
    broadCastService: BroadcastService,
    eventKey: EventKeys,
    private listenerName: string
  ) {
    _.bindAll(this, "reactToEvent");
    this.eventSubscription = broadCastService
      .on(eventKey)
      .subscribe(this.reactToEvent);
  }
  private reactToEvent(event: string) {
    console.log(`Listener [${this.listenerName}]
      received event : ${event}`);
  }
  public unregister() {
    this.eventSubscription.unsubscribe();
  }
}
//...
```

The implementation of the constructor starts with a call to the underscore function named bindAll on line 8, which binds the value of this within a class function to the class instance itself. Remember that when an instance of the class BroadcastService emits an event, it will emit the event with its own scoped value of this.

In other words, when an event is emitted by the Broadcast service, the this variable will be scoped to be this as seen by the BroadcastService class instance and not this as seen by the instance of the Listener class instance.

Calling the bindAll function with this as seen by the Listener class instance and the name of the function to bind to, "reactToEvent", will ensure that when the reactToEvent is called, this will refer to this as scoped to the Listener class instance.

Following our bindAll function call, the constructor then sets the class property named eventSubscription, on line 9, to the Observable returned by the on function of the BroadcastService. Note how we are calling the on function with the value of the eventKey parameter in order to register for specific events we are interested in.

We then subscribe to the Observable stream returned by the on function on line 11 and call the reactToEvent function defined in the Listener class.


Using an event bus within our code is a powerful design pattern that can be used when completely unrelated components need to be notified of a particular event. Think of the case where a user logs out of a website. They may have an open shopping cart and may also be viewing content that is only available to registered users. We can build an event bus to notify all interested components of an event, such as the user logging out, and each component can then take the necessary steps to modify their rendered content accordingly. An event bus allows us **to utilize a design pattern known as the Domain Events Pattern**, where multiple components can react to a specific domain event.

This design pattern strengthens the quality and extensibility of our code base by allowing each component to focus on its particular area of interest and also reacting to external events that occur across the entire domain.