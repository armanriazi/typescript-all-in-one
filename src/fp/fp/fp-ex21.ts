import {none, some, Option} from "fp-ts/lib/Option";

function divideTenBy(num: number): Option<number> {
    return num !== 0 ? some(10 / num) : none;
}

console.log(divideTenBy(5));