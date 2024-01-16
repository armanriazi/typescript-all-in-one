type Foo = {
    bar: number;
    bas: number;
  }
  
  type FooReadonly = Readonly<Foo>; 
  
  let foo: Foo = {bar: 123, bas: 456};
  let fooReadonly: FooReadonly = {bar: 123, bas: 456};
  
  foo.bar = 456; // Okay
  //fooReadonly.bar = 456; // ERROR: bar is readonly