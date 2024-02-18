// function TWO(first, second) {
//     if(first && second) {
//         return 'ok';
//     }
//     throw Error('Did not receive two params!');
// }

// console.log(TWO('first')); //Error

const TWO = (first) => (second) => {
    if(first && second) {
        return 'ok';
    }
    throw Error('Did not receive two params!');
}
const twoWhichWeWillPassToThree = TWO('first argument already given');
console.log(twoWhichWeWillPassToThree('giving second argument'));