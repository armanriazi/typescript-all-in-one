type inferredTypeFromArray<T> =
    T extends (infer U)[] ? U : never;

function testInferredFromArray<T>
    (args: inferredTypeFromArray<T>)
{ 
    console.log(`${args}`);
}
testInferredFromArray<string[]>("test");
testInferredFromArray<number[]>(1);