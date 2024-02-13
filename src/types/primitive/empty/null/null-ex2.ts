
  //Nullish coalescing
  function nullishCheck(a: number | undefined | null) {
    // Check if the passed variable 'a' is either undefined or null
    // If it is, then print 'undefined or null'
    // Else print the value of 'a'
    console.log(`a : ${a ?? `undefined or null`}`);
}

// Call the function with a number
nullishCheck(1);

// Call the function with null
nullishCheck(null);

// Call the function with undefined
nullishCheck(undefined);
