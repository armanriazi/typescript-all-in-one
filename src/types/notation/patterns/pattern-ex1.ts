
var res=false;
// Direct variables
const hasName = !!res;

// As members of objects
const someObj = {
  hasName: !!res
}
console.log(hasName);
console.log(someObj);
// e.g. in ReactJS JSX
//{!!result && <div>{result}</div>}