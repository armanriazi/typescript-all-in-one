// Define the IteratorResult interface
interface IteratorResult {
  done: boolean;
  value: any;
}

// Define the Iterator interface
interface Iterator {
  next(): IteratorResult;
}

// Define the Iterable interface
interface Iterable {
  [Symbol.iterator](): Iterator;
}

// Class implementing the Iterable interface
class MyIterable<T> implements Iterable<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  [Symbol.iterator](): Iterator<T> {
    return new MyIterator(this.items);
  }
}

// Class implementing the Iterator interface
class MyIterator<T> implements Iterator<T> {
  private collection: T[];
  private currentIndex: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.currentIndex = -1;
  }

  next(): IteratorResult<T> {
    if (this.currentIndex < this.collection.length - 1) {
      this.currentIndex++;
      return { done: false, value: this.collection[this.currentIndex] };
    } else {
      return { done: true, value: undefined };
    }
  }
}

// Main function
function main() {
  const myIterable = new MyIterable<number>([10, 20, 30]);
  const iterator = myIterable[Symbol.iterator]();

  let result = iterator.next();
  while (!result.done) {
    console.log(result.value); // Logs each item in the iterable
    result = iterator.next();
  }
}

// Call the main function
main();
