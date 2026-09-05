function createCounter(initialValue){
    let count=initialValue
    return {
        increment:()=>{
            count++
            console.log("Increment ",count);
            // return count
        },
        decrement:()=>{
            count--
            console.log("Decrement ",count);
            // return count
        },
        reset:()=>{
            count=initialValue
        },
        getValue:()=>{
            console.log(count);
            return count
        }
    }
     
}

const methodObject=createCounter(10)
methodObject.increment()
methodObject.increment()
methodObject.decrement()
methodObject.reset()
methodObject.getValue()