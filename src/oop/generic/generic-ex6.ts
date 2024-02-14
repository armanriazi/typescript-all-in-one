/// imit of generic code is that it can only reference functions or properties of objects that are common to any type of T.

// Define an interface IPrintId with id property of type
// number and print method with no return value.
interface IPrintId {
    id: number;
    print(): void;
   }
   
   // Define an interface IPrintName with name property of type
   // string and print method with no return value.
   
   interface IPrintName {
    name: string;
    print(): void;
   }
   
// Define a function called "useT" that takes an argument "item" of type "T"
function useT<T extends IPrintId | IPrintName>(item: T) 
 : void {
 item.print();
 //item.id = 1; //error : id is not common
 //item.name = "test"; //error : name is not common
}
