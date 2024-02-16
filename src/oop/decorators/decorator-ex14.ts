function parameterDec(target: any,
    methodName: string,
    parameterIndex: number) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
   }

   class ClassWithParamDec {
    print(@parameterDec value: string) {
    }
   }