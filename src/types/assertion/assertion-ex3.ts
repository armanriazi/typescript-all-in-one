//var foo = {};
//foo.bar = 123; // Error: property 'bar' does not exist on `{}`
//foo.bas = 'hello'; // Error: property 'bas' does not exist on `{}`

interface Foo {
    bar: number;
    bas: string;
}
var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';