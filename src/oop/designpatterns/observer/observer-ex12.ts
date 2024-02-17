/// Let’s assume that an Observable takes three seconds to emit a single value, and then two seconds to emit another value, and finally, one second to emit the third value.
import { delay, mergeMap, of } from "rxjs";

// Create an observable that emits values 3, 2, 1
const emitTreeTwoOne = of(3, 2, 1);

// Create a new observable that delays each emission from emitTreeTwoOne based on its value
const delayedEmit = emitTreeTwoOne.pipe(
  mergeMap((value: number) => {
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
