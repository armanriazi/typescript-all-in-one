var foo = {
    bar: 123
};
function iTakeFoo(foo) {
    //foo.bar = 456; // Error! bar is readonly
}
iTakeFoo(foo); // The foo argument is aliased by the foo parameter
