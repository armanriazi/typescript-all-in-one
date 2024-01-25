class NumberIterator implements Iterable<number> {
    private current: number;
    constructor(
        private start: number,
        private end: number
    ) {
        this.current = start;
    }
    public next(): IteratorResult<number> {
        if (this.current <= this.end) {
            const value = this.current;
            this.current++;
            return { value, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
    [Symbol.iterator](): Iterator<number> {
        return this;
    }
}
const iterator = new NumberIterator(1, 3);
for (const num of iterator) {
    console.log(num);
}
