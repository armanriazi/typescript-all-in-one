// double assertion

function handler (event: Event) {
    let mouseEvent = event as MouseEvent;
}


//However, the following is most likely an error and TypeScript will complain as shown despite the user’s type assertion:
/*function handler2(event: Event) {
    let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
}*/

//If you still want that Type, you can use a double assertion, but first asserting to unknown (or any) which is compatible with all types and therefore the compiler no longer complains:

function handler3(event: Event) {
    let element = event as unknown as HTMLElement; // Okay!
}