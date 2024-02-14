// Define an interface named IA that has one property 'a' of type number.
interface IA {
    a: number;
   }
   
   // Define an interface named IAb that has two properties 'a' of type number and 'b' of type string.
   interface IAb {
    a: number;
    b: string;
   }
   
   // Define an interface named IAbc that has three properties 'a' of type number, 'b' of type string, and 'c' of type boolean.
   interface IAbc {
    a: number;
    b: string;
    c: boolean;
   }
// Define a conditional type called `abc_ab_a` that takes a type parameter `T`.
type abc_ab_a<T> = 
T extends IAbc ? [number, string, boolean] : 
T extends IAb  ? [number, string] : 
T extends IA   ? [number] : 
never;
