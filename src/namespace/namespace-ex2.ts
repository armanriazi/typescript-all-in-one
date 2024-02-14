/// Note: Take a look at how we need to prefix the class name that we are trying to instantiate with the name of the namespace itself, that is, FirstNameSpace.NameSpaceClass. This code, however, will generate an error.
export namespace MyNamespace {
    export interface MyInterface1 {
        prop1: boolean;
    }
    export interface MyInterface2 {
        prop2: string;
    }
}

const a: MyNamespace.MyInterface1 = {
    prop1: true,
};
