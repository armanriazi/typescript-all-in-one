/// Option gives us a way out. It offers us the ability to apply functions to values without worrying about how null will make it crash
import {getOrElse, map, none, some} from "fp-ts/lib/Option";
const upperCaseIt = (value: string) => value.toUpperCase();
const optionWithAString = some('a value');
const optionEmpty = none;
const upperCased = map(upperCaseIt)(optionWithAString);
const upperCasedEmpty = map(upperCaseIt)(optionEmpty);
console.log(getOrElse(() => 'no value present')(upperCased));
console.log(getOrElse(() => 'no value present')(upperCasedEmpty));