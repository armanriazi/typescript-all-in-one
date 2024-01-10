{
// Declare a constant enum called DoorStateConst
const enum DoorStateConst {
    // The value of 'Open' is set to 10
    Open = 10,
    // The value of 'Closed' is set to 20
    Closed = 20
  }
  // Log the string 'const Closed = [value of DoorStateConst.Open]' to the console
  console.log(`const Closed = ${DoorStateConst.Open}`);


  if (typeof arg1 === "string") {
    // If it is, log that it is a string and return the sum of arg1 and arg2 as a string
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }





// Define a type alias for a string or number
type StringOrNumber = string | number;


let value: number = 10;  // Declare and initialize a number variable
// Declare and initialize a string variable that will hold a message
let message: string = value > 10 ?
  "value is larger than 10" :
  "value is 10 or less";
console.log(message);  // Print the message to the console


//Checking the nested property with "optional chain"
// optional chain will be checking undefined and null
if (obj?.nestedProperty?.name) {
    // If the above check passes, log the value of the "name" property
    console.log(`name = ${obj.nestedProperty.name}`)
  } else {
    console.log(`name not found or undefined`);
}



//Nullish coalescing
console.log(`a : ${a ?? `undefined or null`}`);

// Definite assignment
console.log(`globalString = ${globalString!}`);

}