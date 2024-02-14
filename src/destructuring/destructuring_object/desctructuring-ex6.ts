// Declare an object literal with properties aNum, bStr, and cBool
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
   }
   
// Destructuring assignment to extract properties from complexObject
let { aNum, bStr, cBool } = complexObject;
// Print the value of aNum, bstr and cBool
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);
// Destructuring assignment with property renaming to extract properties from complexObject
let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;

// Print the value of objId, which was destructured from property aNum
console.log(`objId : ${objId}`);

// Print the value of objName, which was destructured from property bStr
console.log(`objName : ${objName}`);

// Print the value of isValid, which was destructured from property cBool
console.log(`isValid : ${isValid}`);
