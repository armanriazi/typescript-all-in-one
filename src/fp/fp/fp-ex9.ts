// declarative fp by using map instead of using foreach

/*for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1; //mutable data structures
}*/

const exampleArray = [1, 2, 3, 4];

function fpAddOneToEach(arr) {
    return arr.map(el => el + 1); // add 1 to each element of array, immutable data structures
}

console.log(fpAddOneToEach(exampleArray));