/// `>tags:` [[Important]] [[Lib]] #keyof #wrapper #Readonly #Mapped_type
interface IAbRequired {
    a: number;
    b: string;
  }
  // Declare a variable called `readonlyVar` of type `Readonly<IAbRequired>`.
  let readonlyVar: Readonly<IAbRequired> =
  {
   a: 1,
   b: "test"
  }
  //readonlyVar.a = 1;