/// `>tags:` [[Important]] [[Lib]] #mapping_type #map #keyof #wrapper
/// Transform properties, Add in the keyof keyword, and we can create new types based on the properties of another type.
interface IAbRequired {
    a: number;
    b: string;
  }
  
  // Create a variable ab that conforms to the IAbRequired interface
  let ab: IAbRequired = {
    a: 1,
    b: "test",
  };
  
  // Define a generic type WeakInterface that makes all properties of a given type optional
  type Mapper<T> = {
    [K in keyof T]?: T[K];
  };
  
  // Create a variable allOptional of type WeakInterface<IAbRequired> and initialize it as an empty object
  let allOptional: Mapper<IAbRequired> = {a:2, b:"test2"};
  
  console.log(`${allOptional.a},${allOptional.b}`);
