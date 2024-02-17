// Code for creating an observable from an array and subscribing to it to receive values

import { of, from, Observable } from 'rxjs';

//const emitArray : Observable<number> = from([1, 2, 3, 4]);
const emitArray: Observable<number> = of(1, 2, 3, 4);
emitArray.subscribe((value: number) => {
 console.log(`arr: ${value}`);
});