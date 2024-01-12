{
	// Place your snippets for typescript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"ts.enum": {
		"scope": "javascript,typescript",
		"prefix": "log",
		"body": [
		"const enum DoorStateConst {"		,	
			"Open = 10,",
			"Closed = 20",
		  "}"		  ,
		  "console.log(`const Closed = ${DoorStateConst.Open}`);"
		],
		"description": "Log output to console"
	}
}
 
//   if (typeof arg1 === "string") {
//     // If it is, log that it is a string and return the sum of arg1 and arg2 as a string
//     console.log(`arg1 is of type string`);
//     return arg1 + arg2;
//   }





// // Define a type alias for a string or number
// type StringOrNumber = string | number;


// let value: number = 10;  // Declare and initialize a number variable
// // Declare and initialize a string variable that will hold a message
// let message: string = value > 10 ?
//   "value is larger than 10" :
//   "value is 10 or less";
// console.log(message);  // Print the message to the console


// //Checking the nested property with "optional chain"
// // optional chain will be checking undefined and null
// if (obj?.nestedProperty?.name) {
//     // If the above check passes, log the value of the "name" property
//     console.log(`name = ${obj.nestedProperty.name}`)
//   } else {
//     console.log(`name not found or undefined`);
// }



// //Nullish coalescing
// console.log(`a : ${a ?? `undefined or null`}`);

// // Definite assignment
// console.log(`globalString = ${globalString!}`);

// }