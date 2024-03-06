const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
// return Array.from(new Set(duplicates));//js
console.log(duplicates); // Output: [2, 4, 5]