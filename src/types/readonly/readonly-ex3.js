var foo = { bar: 123, bas: 456 };
var fooReadonly = { bar: 123, bas: 456 };
foo.bar = 456; // Okay
fooReadonly.bar = 456; // ERROR: bar is readonly
