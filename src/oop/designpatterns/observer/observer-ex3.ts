import { map, of } from "rxjs";

// Code: Mapping numbers to strings using RxJS
const emitter = of(1, 2, 3, 4); // Create an observable emitting numbers 1 to 4
const stringMap = emitter.pipe(
  map((value: number) => { return value * 2 }), // Multiply each emitted number by 2
  map((value: number) => { return `str_${value}` }) // Add "str_" prefix to each value and convert it to a string
);
stringMap.subscribe((value: string) => { // Subscribe to the transformed observable
  console.log(`stringMap emitted : ${value}`); // Log each emitted string value to console
});
