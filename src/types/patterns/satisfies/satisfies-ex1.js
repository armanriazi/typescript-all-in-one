var _a, _b, _c;
// Type Annotation using `User`
var user = {
    name: 'Simone',
    nickName: undefined,
    attributes: ['dev', 'admin'],
};
// In the following lines, TypeScript won't be able to infer properly
(_a = user.attributes) === null || _a === void 0 ? void 0 : _a.map(console.log); // Property 'map' does not exist on type 'string | string[]'. Property 'map' does not exist on type 'string'.
user.nickName; // string | string[] | undefined
console.log("\n---one---");
// Type assertion using `as`
var user2 = {
    name: 'Simon',
    nickName: undefined,
    attributes: ['dev', 'admin'],
};
// Here too, TypeScript won't be able to infer properly
(_b = user2.attributes) === null || _b === void 0 ? void 0 : _b.map(console.log); // Property 'map' does not exist on type 'string | string[]'. Property 'map' does not exist on type 'string'.
user2.nickName; // string | string[] | undefined
console.log("\n---two---");
// Using `satisfies` operators we can properly infer the types now
var user3 = {
    name: 'Simon',
    nickName: undefined,
    attributes: ['dev', 'admin'],
};
(_c = user3.attributes) === null || _c === void 0 ? void 0 : _c.map(console.log); // TypeScript infers correctly: string[]
user3.nickName; // TypeScript infers correctly: undefined
console.log("\n---three---");
