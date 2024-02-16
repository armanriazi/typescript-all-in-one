/// `>tags:` [[Important]] #strictFunctionTypes
/// To run the example you must set strictFunctionTypes = false
/// Note that there is a glaring flaw in our logic here that will cause a runtime exception. The usePrint function constructs a class of type WithPrint, which it uses to invoke the callback function named fn. This class instance will only have a print() function and will not have a run() function, but the callback function that we defined assumes that the argument used will be of type WithPrintAndRun.
/*
class WithPrint {
    print() { }
}

class WithPrintAndRun extends WithPrint {
    run() { }
}

function usePrint(
    fn: (withPrint: WithPrint) => void
) {
    let withPrint = new WithPrint();
    fn(withPrint);
}

usePrint((withRun: WithPrintAndRun) => {
    withRun.run();
});
*/