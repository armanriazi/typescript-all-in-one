///
/// ```bash
/// pnpm tsc src/types/primitive/empty/undefined/undefined-ex2.ts --outfile  ./dist/undefined-ex2.js
/// ```
///

// interface Person {}
// function hello(person: Person | undefined) {}
// hello();

// Next e.g

// interface Person { hello(): void }
// function sayHello(person: Person | undefined) {
//   person.hello(); // 🔴 Error!

//   if (person !== undefined) {
//     person.hello(); // OK
//   }
// }