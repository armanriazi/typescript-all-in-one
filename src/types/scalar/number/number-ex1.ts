
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!

console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 5);  // 9007199254740996 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 6); // 9007199254740996 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 7); // 9007199254740998 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 8); // 9007199254741000 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 9); // 9007199254741000 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 10); // 9007199254741000 - Rounded!

// Safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// Unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// Because it might have been rounded to it due to overflow
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false
