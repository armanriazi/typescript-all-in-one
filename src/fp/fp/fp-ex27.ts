/// It doesn’t modify the array. Is the some() function below a higher-order function? 
/// Yes, It’s a higher-order function.
const numbers = [1, 2, 3, 4, 5];
const multiple_of_five = (number) => number % 5 === 0;
console.log(numbers.some(multiple_of_five));