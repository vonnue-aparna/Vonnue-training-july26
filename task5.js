"use strict";
function createCounter(initialValue) {
    let count = initialValue;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        reset() {
            count = initialValue;
        },
        getValue() {
            return count;
        },
    };
}
const counter = createCounter(10);
counter.increment();
counter.increment;
counter.decrement;
console.log(counter.getValue());
