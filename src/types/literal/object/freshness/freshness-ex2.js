///
/// ```bash
/// pnpm tsc ./src/types/literal/object/freshness/freshness-ex2.ts
/// ```
///
function logIfHasName(something) {
    if (something.name) {
        console.log(something.name);
    }
}
var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
logIfHasName(person); // okay
logIfHasName(animal); // okay
logIfHasName({ name: 'I just misspelled name to name' }); // Error: object literals must only specify known properties. `neme` is excessive here.
logIfHasName({ neme: 'I just misspelled name to neme' }); // Error: object literals must only specify known properties. `neme` is excessive here.
