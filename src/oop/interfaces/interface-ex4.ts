///
/// ```bash
/// pnpm tsc ./src/oop/interfaces/interface-ex4.ts
/// ```
interface Crazy {
    new (): {
        hello: number
    };
}
/*
class CrazyClass implements Crazy {
    constructor() {
        return { hello: 123 };
    }
}
// Because
const crazy = new CrazyClass(); // crazy would be {hello:123}
*/