/// `>tags:` [[Important]] #ConcatMap
/// we are receiving values emitted by the Observable based on the time that they were emitted.
/// Note, too, that we have three emit events followed by three receive events. This means that each value received by the delayedEmit Observable is processed immediately.
/// If it is important to process the emitted values in order, no matter when they arrive, we can use the concatMap function instead of the mergeMap function.
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
