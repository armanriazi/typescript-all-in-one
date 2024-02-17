/// `>tags:` [[Important]] #Observer #MergeMap #Subscribe

import { Observable, from, map, mergeMap, of } from "rxjs";

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

productList.pipe(
  // Use mergeMap to flatten the nested Observable stream returned by getProductName
  mergeMap((value: IProductId): Observable<IProductDescription> => {
    // Log the current product ID
    console.log(`Product id: ${value?.id}`);
    // Use getProductName to fetch the name and description of the current product
    return getProductName(value.id);
  })
).subscribe((value: IProductDescription) => {
  // Log the name and description of each product returned by getProductName
  console.log(`product name : ${value.name}`)
  console.log(`product desc : ${value.description}`)
});

     