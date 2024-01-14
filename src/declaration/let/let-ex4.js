/// '>tags:' #iife pattern to solve issue of ex2 #important
var funcs = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {
    (function () {
        var local = i;
        funcs.push(function () {
            console.log(local);
        });
    })();
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
