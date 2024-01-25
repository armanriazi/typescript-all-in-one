///
/// ```bash
/// pnpm tsc ./src/collection/iterator/iterator-ex4.ts
/// ```
///

class Component {
    constructor (public name: string) {}
}
class Frame implements IterableIterator<Component> {

    private pointer = 0;
  
    constructor(public name: string, public components: Component[]) {}
  
    public next(): IteratorResult<Component> {
      if (this.pointer < this.components.length) {
        return {
          done: false,
          value: this.components[this.pointer++]
        }
      } else {
        return {
          done: true,
          value: null
        }
      }
    }
  
    [Symbol.iterator](): IterableIterator<Component> {
      return this;
    }
  
  }
  let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
for (let cmp of frame) {
  console.log(cmp);
}