//Define an interface `IPerson` with properties `id` and `name`
interface IPerson {
  id: number;
  name: string;
}

// Generate a string literal type for the properties of the interface `IPerson`
type PersonPropertyName = keyof IPerson;
//This is equivalent to the following string literal:
type PersonPropertyLiteral = "id" | "name";