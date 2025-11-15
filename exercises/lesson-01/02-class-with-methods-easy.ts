/**
 * Exercise 2: Class with Methods (Easy)
 *
 * Create a Counter class with:
 * - count property (starts at 0)
 * - increment(), decrement(), getValue(), reset() methods
 *
 * See README.md for full requirements and example usage.
 */

// Your code here


class Counter {
    public count: number;
    public original: number;

    constructor(num: number = 0) {
        this.count = num;
        this.original = num;
    }

    public increment() {
        return ++this.count;
    }

    public decrement() {
        return --this.count;
    }

    public getValue() {
        return this.count;
    }

    public reset() {
        return this.count = this.original;
    }
}


const counter = new Counter(5);

console.log(counter);
console.log("Incremented to: ", counter.increment());
console.log("Decremented to: ", counter.decrement());
console.log("Value is currently: ", counter.getValue());
console.log("Original value is: ", counter.reset());