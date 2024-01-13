interface X<T> {
    a: T;
}
let x: X<number> = { a: 1 };
let y: X<string> = { a: 'a' };
//x === y; // Invalid as the type argument is used in the final structure

