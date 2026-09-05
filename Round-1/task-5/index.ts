function createCounter(intialValue:number) {
    let value = intialValue;
    return {
        increment() {
            value++;
        },
        decrement() {
            value--;
        },
        reset() {
            value = intialValue;
        },
        getValue() {
            return value;
        }
    }
}

let counter = createCounter(10)
counter.increment()
counter.increment()
counter.decrement()

console.log(counter.getValue())

// console.log(counter.count)