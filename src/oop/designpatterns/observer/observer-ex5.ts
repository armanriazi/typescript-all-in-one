import { Observable, map, of } from "rxjs";
const emitOneTwo = of(1, 2); // create an Observable that emits 1 and 2
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
