//let foo: never = 123; // Error: Type number is not assignable to never
/// `>tags:` #Error
// Okay as the function's return type is `never`
let bar: never = (() => { throw new Error(`Throw my hands in the air like I just don't care`) })();

function foo(x: string | number): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }
  
    // Without a never type we would error :
    // - Not all code paths return a value (strict null checks)
    // - Or Unreachable code detected
    // But because TypeScript understands that `fail` function returns `never`
    // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
    return fail("Unexhaustive!");
  }
  
  function fail(message: string): never { throw new Error(message); }
  