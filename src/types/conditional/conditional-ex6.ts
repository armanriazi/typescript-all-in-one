type inferredFromFnParam<T> =
 T extends (a: infer U) => void ? U : never;

 function testInferredFromFnParam<T>(
    arg: inferredFromFnParam<T>
   ) { 
    console.log(`${arg}`);
   }
   
   testInferredFromFnParam<(a: number) => void>(1);
   testInferredFromFnParam<(a: string) => void>("test");