// The function add has two different function signatures, each with different parameter types and return types.
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// The implementation of the function add takes two parameters of any type and returns their sum.
function add(a: any, b: any) {
  return a + b;
}

// Calling the add function with different parameters
add("first", "second");
add(1, 2);
//add(true, false); //Error