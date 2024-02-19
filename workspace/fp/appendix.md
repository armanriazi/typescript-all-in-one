## The Writer monad

The Writer monad is another classic monad. Whereas Reader was used to retrieve values at the right time, Writer is used to store them away. The most common example use case for Writer is gathering log messages.

## The These monad

The These monad has some similarities with the Either monad in that it has a left and a right value. However, while Either doesn’t handle its left value, These processes both its left, its right, or both at the same time.

```ts
import {pipe} from "fp-ts/function";
import * as T from "fp-ts/These"
const result = pipe(
    T.both('left', 0),
    T.bimap(v => v.toUpperCase(), v => v + 1),
    T.map(v => v * 2),
    T.mapLeft(v => v + ' world'),
    T.swap
);

console.log(T.toTuple(0, 'default')(result));
```

This prints [2, 'LEFT world']. Note that the bimap is used to transform both the left and right value, the mapLeft only changes the left value, and the swap swaps the two values. The resulting tuple will be in reverse order. The fp-ts library also has a TaskThese, combining the powers of Task and These.


Note: Swap is also available for monads like TaskEither. In something like monitoring, an error, normally a left, might be a good thing that you want to process. In that case, you can put it in a right.