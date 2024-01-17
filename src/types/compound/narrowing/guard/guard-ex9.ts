///Some examples where narrowing does not occur

const f1 = (x: unknown) => {
    let isString = typeof x === 'string';
    if (isString) {
     //  x.length; // Error, no narrowing because isString it is not const
    }
};

const f6 = (
    obj: { kind: 'foo'; foo: string } | { kind: 'bar'; bar: number }
) => {
    const isFoo = obj.kind === 'foo';
    obj = obj;
    if (isFoo) {
       // obj.foo; // Error, no narrowing because obj is assigned in function body
    }
};