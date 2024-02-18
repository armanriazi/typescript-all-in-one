/// The checkValueBetween and calculatePercentage methods in the code snippet above are highly composable. Using a helper, we can combine two of the functions and get the result we expected.
/// We were able to compose these functions because they’re both Pure functions. Our validation function, checkValueBetween, is also pure, though slightly more challenging to use. However, because it returns a monad, we can use map to pass its value to the other functions.
// defining variable and assigning value to it
const MAXIMUM_SCORE = 20;

// function that calculates the percentage by using the formula (value/total *100)
const calculatePercentage = (max) => (value) => value / max * 100;

// function that prints the congratulatory message along with the scored value
const congratulation = (value) => `Congratulations! You scored ${value}%`;

const calculatePercentageMaxPoints20 = calculatePercentage(MAXIMUM_SCORE);

// helper function for composing
const compose = (...fns) => (...args) => {
    return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
};

const composed = compose(congratulation, calculatePercentageMaxPoints20);

console.log(composed(10));