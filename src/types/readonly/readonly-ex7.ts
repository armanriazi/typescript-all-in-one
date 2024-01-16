let foo: {readonly bar: number;} = {
        bar: 123
    };
function iMutateFoo(foo: { bar: number }) {
    foo.bar = 456;
}
iMutateFoo(foo); // The foo argument is aliased by the foo parameter
console.log(foo.bar); // 456!