///
/// ```bash
/// pnpm tsc src/types/notation/notation-ex3.ts --outfile  ./dist/notation-ex3.js
/// ```
///
let v = 0;
v ? true : false  //equals false 
v ? true : false  //equals true
!!v === false     //falsev = 1;
v ? true : false  //equals true
!v ? true : false //equals false
!!v === true      //true
if (typeof !!v){   // boolean!!false === false
    console.log(`${v}`);
}
!!true === true
!!0 === false     // 0 is the exception value in TS
!!1 === true      // TS inverts that, so you can get it as a boolean
!!"" === false            // empty string is false
!!undefined === false     // undefined primitive is false
!!null === false          // null is false
//!!isNaN(value) === false
!!"not empty string" === true
!!{} === true;                 // an (empty) object is truthy
!![] === true;                 // an (empty) array is truthyconst array = [1,2,3];
// !!array[0];                    // true
// !!array[3];                    // falseconst obj = {
//   value: 1,
//   item: undefined
// };
// !!obj.value;                   // true
// !!obj.item;                    // falseconst fibonacci: number = 1.6180339887;
// !!fibonacci === true;const dt = new Date();
//!!dt === true;