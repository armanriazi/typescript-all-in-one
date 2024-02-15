/// `>tags:` [[Important]] [[Lib]] #IsArray
type IsArray<T> = T extends any[] ? true : false;
const myArray = [1, 2, 3];
const myNumber = 42;
type IsMyArrayAnArray = IsArray<typeof myArray>; 
type IsMyNumberAnArray = IsArray<typeof myNumber>; 