"use strict";
function debounce(fn, delay) {
    let timer;
    return function (query) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(query);
        }, delay);
    };
}
const search = debounce((query) => console.log(query), 300);
search("j");
search("ja");
search("jav");
search("java");
