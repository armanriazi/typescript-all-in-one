/// Sample of an inline type
var name: {
    first: string;
    second: string;
};
name = {
    first: 'John',
    second: 'Doe'
};

/*
name2 = {           // Error : `second` is missing
    first: 'John'
};
name3 = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};
*/