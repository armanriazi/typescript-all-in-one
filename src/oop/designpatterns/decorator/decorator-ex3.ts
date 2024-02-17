///
/// ```bash
/// pnpm tsc ./src/oop/decorators/decorator-ex3.ts
/// ```
///
function log<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
        This,
        (this: This, ...args: Args) => Return
    >
) {
    const methodName = String(context.name);

    function replacementMethod(this: This, ...args: Args): Return {
        console.log(`LOG: Entering method '${methodName}'.`);
        const result = target.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`);
        return result;
    }

    return replacementMethod;
}
class MyClass {
    @log
    sayHello() {
        let x=2;
        console.log('Good');
        console.log(`${x}`);
        console.log('Bad');
        console.log('Good', 'Bad');
    }
}

new MyClass().sayHello();