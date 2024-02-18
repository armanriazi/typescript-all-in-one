// import the result monad from folktale
const Result = require('folktale/result');

// defining variables and assigning values to them
const MINIMUM_SCORE = 0;
const MAXIMUM_SCORE = 20;

// function that checks if the provided value is bounded between a lower value (inclusive) and upper value (inclusive) or not
const checkValueBetween = (lower, upper) => (value) => {
    return value >= lower && value <= upper ?
        Result.Ok(value) : Result.Error('Value was negative');
};

// function that calculates the percentage by using the formula (value/total *100)
const calculatePercentage = (max) => (value) => value / max * 100;

// function that prints the congratulatory message along with the scored value
const congratulation = (value) => `Congratulations! You scored ${value}%`;

// setup of methods via currying / partial application
const betweenZeroAndTwenty = checkValueBetween(MINIMUM_SCORE, MAXIMUM_SCORE);

const calculatePercentageMaxPoints20 = calculatePercentage(MAXIMUM_SCORE);

// piping our workflow and defined methods/functions
function printCongratulationWithPointsAsPercentage(value) {
    const result = betweenZeroAndTwenty(value)
        .map(calculatePercentageMaxPoints20)
        .map(congratulation)
        .merge();
    console.log(result);
}

// examples
printCongratulationWithPointsAsPercentage(12);
printCongratulationWithPointsAsPercentage(-1);

// Output
/*
Congratulations! You scored 60%
Value was negative
*/