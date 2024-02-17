/// `>tags:` [[Important]] [[Test]] #Condition
function hasValueNoWhiteSpace(value: string): boolean {
    if (
        value &&
        value.length > 0 &&
        value.trim().length > 0) {
        return true;
    }
    return false;
}


function testUsing<T>
    (values: T[], func: Function) {
    for (let value of values) {
        func.apply(Object, [value]);
    }
}

describe("data driven tests", () => {

    testUsing(
        [
            [undefined, false],
            [null, false],
            [" ", false],
            ["  ", false],
            [" a ", true]
        ]
        , ([value, isValid]: [string, boolean]) => {

            it(`"${value}" hasValueNoWhiteSpace ? ${isValid}`, () => {
                isValid ?
                    expect(hasValueNoWhiteSpace(value)).toBeTruthy() :
                    expect(hasValueNoWhiteSpace(value)).toBeFalsy();
            });

        });

});
