const exampleArray = [10, 20, 30];

function sum(arr) {
    if (arr.length === 0){
        console.log("Reached terminal condition");
        return 0;

    }
    const [head, ...tail] = arr;
    console.log(`Adding ${head} to the sum`);
    console.log(`${tail} tailed!\n`);
    return head + sum(tail);

}

console.log(sum(exampleArray));