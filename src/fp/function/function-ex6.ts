// Define a literal `AllowedStringValues` that can be either "one", "two", or "three".
type AllowedStringValues = "one" | "two" | "three";

// Define a literal `AllowedNumericValues` that can be either 1, 20, or 65535.
type AllowedNumericValues = 1 | 20 | 65535;

// The `withLiteral` function takes a parameter `input` of the union type `AllowedStringValues | AllowedNumericValues`.
function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
  // Logs the string representation of `input` to the console.
  console.log(`called with : ${input}`);
}
// Calls the `withLiteral` function with different arguements
withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);
//withLiteral("four");
//withLiteral(2);