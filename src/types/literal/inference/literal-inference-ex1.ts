
/*function iTakeFoo(foo: 'foo') { }
const test = {
  someProp: 'foo'
};
*/

/*
iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'


This is because `test` is inferred to be of type `{someProp: string}`. The fix here is to use a simple type assertion to tell TypeScript the literal you want it to infer as shown below: 
*/

function iTakeFoo(foo: 'foo') { }
const test = {
  someProp: 'foo' as 'foo'
};
iTakeFoo(test.someProp); // Okay!