/// `>tags:` [[Important]] [[Lib]] #Infer #Constrate
/// Note: Remember that a conditional type(T) is a computed type(U) based on the original type that is given as an input. This means that in order to use a conditional type, we need to supply an input type, and the conditional type will be computed for us based on the input type.
type inferFromPropertyType<T> =
 T extends { id: infer U } ? U : never;

 function testInferFromPropertyType<T>
(
 arg: inferFromPropertyType<T>
) { 
    console.log(`${arg}`);
}
testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);