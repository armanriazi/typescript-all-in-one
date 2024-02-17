import { Observable, from, map, of } from "rxjs";

// Define an interface for product IDs
interface IProductId {
    id: number; // ID property of type number
  }
  
  // Define an interface for product descriptions
  interface IProductDescription {
    name: string; // Name property of type string
    description: string; // Description property of type string
  }
// Define a list of product IDs as an Observable
const productList = <Observable<IProductId>>from(
    [{ id: 1 }, { id: 2 }, { id: 3 }]
   );
   
// Define a function to get product names and descriptions as an Observable
function getProductName(id: number):
    Observable<IProductDescription> {
    return of(
    {
        id: id, // ID property of type number
        name: `Product_${id}`, // Name property with a string value
        description: `Description_${id}` // Description property with a string value
    }
    );
}

// Use the productList Observable to get product names and descriptions
productList
  .pipe(
    // Map each product ID to an Observable of its name and description
    map((value: IProductId) => {
      console.log(`Product id: ${value.id}`); // Log the product ID
      return getProductName(value.id); // Return an Observable of the product name and description
    })
  )
  .subscribe((value: Observable<IProductDescription>) => {
    // Subscribe to each Observable of product names and descriptions
    value.subscribe((value: IProductDescription) => {
      console.log(`product name : ${value.name}`); // Log the product name
      console.log(`product desc : ${value.description}`); // Log the product description
    });
  });

     