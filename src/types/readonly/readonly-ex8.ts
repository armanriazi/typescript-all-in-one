interface Foo {
    readonly bar: number;
}
let foo: Foo = {
    bar: 123
};
function iTakeFoo(foo: Foo) {
    //foo.bar = 456; // Error! bar is readonly
}
iTakeFoo(foo); // The foo argument is aliased by the foo parameter