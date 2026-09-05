function debounce(fn, delay){
    let timerid;
    if(timerid){
        clearTimeout(timerid)
    }
    timerid=setTimeout(()=>{
        return fn
    },delay)
}

const search = debounce((query) => console.log(query), 300);
console.log(search);

// search("j");
// search("ja");
// search("jav");
// search("java");