/// `>tags:` [[Important]] [[Lib]] #keyof #wrapper #Required #Mapped_type
interface IAbRequired {
    a: number;
    b: string;
  }

  interface IAbc {
    a: number;
    b: string;
    c: boolean;
  }
  
  // Define a new type PickAb using the Pick utility type to select only the "a" and "b" properties from the IAbc interface.
  type PickAb = Pick<IAbc, "a" | "b">;
  let pickAbObject: PickAb = {
    a: 1,
    b: "test",
  };
  
  console.log(pickAbObject);
  