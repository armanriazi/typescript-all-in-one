/// `>tags:` [[Important]] #ForkJoin
/// When we have a number of Observable streams that need to all complete before we do something, we can use the forkJoin function. This situation occurs quite often when dealing with REST requests at the start of a page load, where the page may need to load data from a number of different REST APIs before displaying the page.
import { Observable, forkJoin, interval, map, take, toArray } from "rxjs";

// Create an observable that emits an incrementing integer
const onePerSecond = interval(1000);

// Create an observable that emits the first three integer values emitted by onePerSecond
const threeNumbers: Observable<number[]> = onePerSecond.pipe(
  take(3), // take only the first 3 values
  map((value: number) => {
    console.log(`>> threeNumbers emitting : ${value}`);
    return value;
  }),
  toArray() // collect all emitted values into an array
);

// Create an observable that emits the first two string values emitted by onePerSecond
const twoStrings: Observable<string[]> = onePerSecond.pipe(
  take(2), // take only the first 2 values
  map((value: number) => {
    console.log(`>> twoStrings emitting : value_${value}`);
    return `value_${value}`;
  }),
  toArray() // collect all emitted values into an array
);

/*forkJoin([threeNumbers, twoStrings]).subscribe((values) => {
  console.log(`<< *threeNumbers returned : ${values[0]}`);
  console.log(`<< *twoStrings returned : ${values[1]}`);
});*/

//named destructor variables. forkjoin will completed after the two stream observer
forkJoin(
  [threeNumbers, 
     twoStrings]
).subscribe(
([threeNumbersOutput, twoStringsOutput]) => {
  console.log(`<< *threeNumbersOutput: ${threeNumbersOutput}`);
  console.log(`<< *twoStringsOutput: ${twoStringsOutput}`);
}
);



