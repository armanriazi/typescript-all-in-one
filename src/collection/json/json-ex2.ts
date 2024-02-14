// Create an array of objects with a single element
let objArray1 = [
    { id: 1, name: "first element" },
  ]
  
  // Create another array of objects with a single element
  let objArray2 = [
    { id: 2, name: "second element" }
  ]
  
  // Merge the two arrays of objects with a new object using the spread operator
  let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
  ]
  
  // Print the contents of objArray3 to the console
  console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
  