import { interval, map, take } from "rxjs";

// Creating an Observable stream that emits a value every second
const sourceInterval = interval(1000);

// Creating a new Observable stream with 5 mapped values
const fiveNumbers = sourceInterval.pipe(
  take(5),
  map((value: number) => {
    console.log(`map received : ${value}`);
    return `string_${value * 2}`;
  })
);

// Subscribing to the fiveNumbers stream and logging the values
fiveNumbers.subscribe((value: string) => {
  console.log(`${new Date().toLocaleTimeString()} ${value}`);
});
