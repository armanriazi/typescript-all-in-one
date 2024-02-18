const exampleArray = [1, 2, 3, 4, 5, 6, 7];

function inALoop(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        // filter out any elements smaller than 2 and then increment them by one
        if(arr[i] > 2) {
            let temporaryResult = arr[i] + 1;

            // add the incremented element to a new array if it is greater than four
            if(temporaryResult > 4) {
                newArr.push(temporaryResult);
            }
        }
    }

    // return the new array
    return newArr;
}

console.log(inALoop(exampleArray));

// Next example will use imerative free style code