/// Based on the type of the first argument, the second argument can be one of a range of different types.
// This is a generic type that takes a type parameter T and returns a union type of Date, number, or string, depending on the type of T.
type dateOrNumberOrString<T> =
 T extends Date ? Date :
 T extends number ? Date | number :
 T extends string ? Date | number | string :
 never;
function compareValues
 <T extends string | number | Date | boolean>
(
 input: T,
 compareTo: dateOrNumberOrString<T>
) {
console.log(`${input},${compareTo}`);
}
// Calling the compareValues function with different arguements
compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2)
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");