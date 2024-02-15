// async function foo() {
//     try {
//         var val = await getMeAPromise();
//         console.log(val);
//     }
//     catch(err) {
//         console.log('Error: ', err.message);
//     }
// }

// function getMeAPromise() {
//     throw new Error("Function not implemented.");
// }

/// The function `foo` can be simply wrapped up as follows:
/*
const foo = wrapToReturnPromise(function* () {
    try {
        var val = yield getMeAPromise();
        console.log(val);
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
});

function wrapToReturnPromise(arg0: () => Generator<any, void, unknown>) {
    throw new Error("Function not implemented.");
}
*/