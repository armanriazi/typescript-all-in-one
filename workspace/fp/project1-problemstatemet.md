### Problem Statement 1

Suppose we’re working on the application from the last challenge. We want to extend it with an `additional function called checkDecentHour`, which takes a number and returns a left with the way too early stringwhen the hour is before8`. In our application function, we now want to check whether it’s way too early after checking whether the hour is valid. Instead of returning a default error message as we did earlier, we want to give back whatever error we had.

```ts
// Note that you could also use the fp-ts identity function in getOrElse
 
const checkValidHour = (hour: number): E.Either<string, number> => {
    return hour > 0 && hour <= 24 ? E.right(hour) : E.left('invalid hour');
};

const mapToGreeting = (hour: number): string => {
    return hour < 12 ? 'good morning' : 'good afternoon';
};

const checkDecentHour = (hour: number): E.Either<string, number> => {
    return hour >= 8 ? E.right(hour) : E.left('way too early');
};

const application = (hour: number) => {
    return pipe(
        checkValidHour(hour),
        E.chain(checkDecentHour),
        h => E.map(mapToGreeting)(h),
        E.getOrElse(err => err),
    );
};
console.log(application(5));
console.log(application(9));
```

### Problem Statement 2
Given the two functions below, create a function called application that takes a single parameter, hour, of type number and uses pipe() to: Check whether the hour is valid using the checkValidHour function. Change valid hours to the proper greeting using the mapToGreeting function. Fall back to unknown greeting when the hour is invalid.

```ts

const checkValidHour = (hour: number): E.Either<string, number> => {
    return hour > 0 && hour <= 24 ? E.right(hour) : E.left('invalid hour');
};

const mapToGreeting = (hour: number) => {
    return hour < 12 ? 'good morning' : 'good afternoon';
};


const application = (hour: number) => {
    return pipe(
        checkValidHour(hour),
        h => E.map(mapToGreeting)(h),
        E.getOrElse(() => 'unknown greeting'),
    );
};
console.log(application(8));
console.log(application(13));
console.log(application(25));
```