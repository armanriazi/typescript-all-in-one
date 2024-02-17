// Importing the 'map' operator from the 'rxjs' library
import { of } from "rxjs";
import { map } from "rxjs/operators";

// Creating an observable 'emitter' that emits the values 1, 2, 3, and 4
const emitter = of(1, 2, 3, 4);

// Creating a new observable 'modulus' by applying the 'map' operator to the 'emitter' observable
// The 'map' operator takes each emitted value, logs it to the console, and returns the modulus of that value and 2
const modulus = emitter.pipe(
  map((value: number) => {
    console.log(`received : ${value}`);
    return value % 2;
  })
);

// Subscribing to the 'modulus' observable to receive its emitted values
// When each value is emitted, it is logged to the console with a message indicating that it is a modulus value
modulus.subscribe((value: number) => {
  console.log(`modulus : ${value}`);
});
