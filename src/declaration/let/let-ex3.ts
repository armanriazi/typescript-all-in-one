let funcs = [];
// create a bunch of functions
for (let i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
// call them
for (let j = 0; j < 3; j++) {
    funcs[j]();
}

