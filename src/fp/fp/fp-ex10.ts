/// Tacit Programming or point-free style or 
const exampleArray = [1, 2, 3, 4];

function addOne(el) {
    return el + 1;
}
function fpAddOneToEach(arr) {
    return arr.map(addOne);
}
console.log(fpAddOneToEach(exampleArray));