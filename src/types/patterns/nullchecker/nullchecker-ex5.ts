///
/// ```bash
/// pnpm tsc ./workspace/types/patterns/nullchecker/nullchecker.ts
/// ```
///
type Person = {
    name: string;
};

const printName = (person?: Person) => {
    console.log(`Name is ${person!.name}`);
};

const a:any={};

printName(a);