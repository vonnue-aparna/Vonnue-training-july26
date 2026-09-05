function createCounter(initialValue){
    const count= 0;
    return {
       increment(){
         count++;
         return count;
       },

       decrement(){
        count--;
        return count;
       },
       reset(){
        count=0;
        return count;
       },
       getValue(){
        return count;
       }
    }
}

const counter= createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
