//@ts-ignore
Symbol.metadata ??= Symbol('Symbol.metadata'); // Simple polify
type Context =
    | ClassFieldDecoratorContext
    | ClassAccessorDecoratorContext
    | ClassMethodDecoratorContext; // Context contains property metadata: DecoratorMetadata

function setMetadata(_target: any, context: Context) {
    //// Set the metadata object with a primitive value
    //context.metadata[context.name] = true;
}
class MyClass {
    @setMetadata
    a = 123;

    @setMetadata
    accessor b = 'b';

    @setMetadata
    fn() {}
}
/*const metadata = MyClass[Symbol.metadata]; // Get metadata information
console.log(JSON.stringify(metadata)); // {"bar":true,"baz":true,"foo":true}
*/