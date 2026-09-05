function createCounter(initialValue) {

    let value = initialValue;

    function increment() {
        value++;
    }

    function decrement() {
        value--;
    }

    function reset() {
        value = 0;
    }

    function getValue() {
        return value;
    }
}

const counter = createCounter(10);

counter.increment();
counter.increment();

console.log(counter.getValue());
