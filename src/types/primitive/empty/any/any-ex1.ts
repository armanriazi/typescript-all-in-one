 /// For new projects use TypeScript configuration **noImplicitAny** which enables TypeScript to issue errors where any is used or inferred.
 // Declare a variable called item1 with a type of any and assign to it an object literal that has properties id and name
var item1: any = { id: 1, name: "item1" }

// Assign a new object literal to item1 with only an id property
item1 = { id: 2 };
