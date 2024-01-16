///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex3.ts
/// ```
///
const enum Language {
    English = 'EN',
    Spanish = 'ES',
}
console.log(Language.English);

//Will be compiled into:

//console.log('EN' /- [x] Language.English */);