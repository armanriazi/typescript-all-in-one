type inferredFromFnReturnType<T> =
 T extends (a: string) => infer U ? U : never;

function testInferredFromReturnType<T>(
 arg: inferredFromFnReturnType<T>
) {
    console.log(`${arg}`);
 }
testInferredFromReturnType<(a: string) => number>(1);
testInferredFromReturnType<(a: string) => boolean>(false);