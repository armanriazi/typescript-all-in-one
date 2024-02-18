const exampleArray = [1, 2, 3, 4, 5, 6, 7];

function withFilterAndMap(arr) {
    // return the array after computing defined filter and map operations
    return arr
        .filter(el => el > 2) // filter elements greater than two
        .map(el => el + 1) // add one to filtered elements
        .filter(result => result > 4); // from the incremented elements, filter the ones greater than four
}

console.log(withFilterAndMap(exampleArray));