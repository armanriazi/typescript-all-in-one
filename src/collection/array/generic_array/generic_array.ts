/// `>tags:` #Important #Array #Concatenator #Lib
// This class takes an array of strings or numbers and concatenates them into a single string

class Concatenator<T extends Array<string> | Array<number>> {  
    // Method that concatenates the array of items into a string
    public concatenateArray(items: T): string {      
      // Initialize an empty string to store the concatenated values
      let returnString = "";  
      // Loop through each item in the array
      for (let i = 0; i < items.length; i++) {
        // If this is not the first item, add a comma before appending the value
        returnString += i > 0 ? "," : "";        
        // Append the current value to the return string
        returnString += items[i].toString();
      }
      // Return the final concatenated string
      return returnString;
    }
  }
// Create a new instance of the Concatenator class
let concator = new Concatenator();
// Concatenate an array of strings
let concatResult = concator.concatenateArray(["first", "second", "third"]);
console.log(`concatResult = ${concatResult}`);

// Concatenate an array of numbers
concatResult = concator.concatenateArray([1000, 2000, 3000]);
console.log(`concatResult = ${concatResult}`);
