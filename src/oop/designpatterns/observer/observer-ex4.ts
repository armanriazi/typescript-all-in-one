/// because the map function does not return a value, our subscribe function on line 8 must define the type of the incoming value parameter as void.
/// Unfortunately, the emitted value will be undefined because we have not returned anything within our map function.
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
