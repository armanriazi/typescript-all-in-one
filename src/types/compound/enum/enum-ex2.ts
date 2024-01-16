///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex2.ts
/// ```
///
enum Tristate {
    False,
    True,
    Unknown
}
//console.log(Tristate.0); // InValid
console.log(Tristate.False); // 0
console.log(Tristate[0]); // "False"
console.log(Tristate["False"]); // 0
console.log(Tristate[Tristate.False]); // "False" because `Tristate.False == 0`