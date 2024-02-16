
/// tsconfig:  "experimentalDecorators": true, "emitDecoratorMetadata": true
///
/// ```bash
/// pnpm tsc src/oop/decorators/decorator-ex15.ts --outfile  ./dist/decorator-ex15.js
/// ```
///
function metadataParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
   ) {}
   // Define a class called `ClassWithMetadata`.
   class ClassWithMetadata {
    // Define a method called `print`.
    print(
     // Apply `metadataParameterDec` decorator on `id` parameter.
     @metadataParameterDec id: number, name: string
    ) {}
   }
   

   /// Generated JS will show more info with inject code of __decorate because we enable the feature of emitDecoratorMetadata
/// to get more info you can install  reflect-metadata library
//    function metadataParameterDec(target, methodName, parameterIndex) {
// }
// var ClassWithMetadata = /** @class */ (function () {
//     function ClassWithMetadata() {
//     }
//     ClassWithMetadata.prototype.print = function (id, name) {
//     };
//     __decorate([
//         __param(0, metadataParameterDec),
//         __metadata("design:type", Function),
//         __metadata("design:paramtypes", [Number, String]),
//         __metadata("design:returntype", void 0)
//     ], ClassWithMetadata.prototype, "print", null);
//     return ClassWithMetadata;
// }());