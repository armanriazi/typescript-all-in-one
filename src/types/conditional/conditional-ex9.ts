/// It will exclude those types given in the second generic parameter from the types given in the first generic parameter.
/// `>tags:` [[Important]] [[Lib]] #Exclude
/// ```bash
/// pnpm tsc src/types/conditional/conditional-ex9.ts --outfile  ./dist//conditional-ex9.js
/// ```
///
type ExcludeStringAndNumber = Exclude<
 string | number | boolean,
 string | number>;
let boolValue: ExcludeStringAndNumber = true;
console.log(`${boolValue}`);
//let strValue: ExcludeStringAndNumber = "Hello"; //Invalid
//console.log(`${strValue}`);