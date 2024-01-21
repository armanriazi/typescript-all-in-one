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

const crazy = new CrazyClass(); // crazy would be {hello:123}
*/