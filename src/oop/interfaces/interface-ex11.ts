
/// `>tags:` #Important #Interface #keyof #Literal
///
/// ```bash
/// pnpm tsc src/oop/interfaces/interface-ex11.ts --outfile  ./dist/interface-ex11.js
/// ```
///
interface IPerson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof IPerson;

// Define a function `getProperty` that accepts two parameters
function getProperty(key: PersonPropertyName, value: IPerson) {
  console.log(`${key} = ${value[key]}`);
}

// Call the function `getProperty` with argument `"id"` and an object with `id` and `name` properties
getProperty("id", { id: 1, name: "firstName" });

// Call the function `getProperty` with argument `"name"` and an object with `id` and `name` properties
getProperty("name", { id: 2, name: "secondName" });

// Call the function `getProperty` with argument `"telephone"` and an object with `id` and `name` properties
//getProperty("telephone", { id: 3, name: "thirdName" }); //Error
