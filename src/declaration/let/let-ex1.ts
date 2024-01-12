if (true) {
    let foo = 123;
}

// becomes //

if (true) {
    var foo = 987;
}

console.log(`${foo}`);


