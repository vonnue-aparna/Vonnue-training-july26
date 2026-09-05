export function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        },delay)
    }
}

const search = debounce((query) => console.log(query), 300);
search("j");
search("ja");
search("jav");
search("java");
