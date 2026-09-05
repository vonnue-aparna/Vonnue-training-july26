function debounce(fn: (query: string) => void, delay: number) {
  let timer: number;
  return function (query: string) {
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
