/// related to noFallthroughCasesInSwitch in config file
enum SwitchEnum {
    ONE,
    TWO
}
function testEnumSwitch(value: SwitchEnum): string {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
            break; //comment this line will expose an error
        case SwitchEnum.TWO:
            returnValue = "Two";
    }
    return returnValue;
}

console.log(`SwitchEnum.ONE = ${testEnumSwitch(SwitchEnum.ONE)}`);
console.log(`SwitchEnum.TWO = ${testEnumSwitch(SwitchEnum.TWO)}`);