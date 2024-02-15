///  The Extract conditionals type will return all matching types given in the second generic parameter from the list given in the first parameter.
/// `>tags:` [[Important]] [[Lib]] #Extract
type StringOrNumber = Extract<
 string | boolean | never,
 string | number>;
let stringValue: StringOrNumber = "test";
//let numberValue: StringOrNumber = 1; //Invalid
//let boolValue: StringOrNumber = false; //Invalid

console.log(`${stringValue}`);