import { renderDashBoard, renderHomePage } from "./pages.js";
import { createRouter } from "./router.js";
import { createStore } from "./storageService.js";
export let store;
export let router;
async function init() {
    let initialState = [];
    store = createStore(initialState);
    router = createRouter();
    router.register('/', () => renderHomePage());
    router.register('/dashboard', () => renderDashBoard());
    document.querySelectorAll("a").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            let path = element.getAttribute("href");
            console.log('routing');
            if (path)
                router.navigate(path);
        });
    });
    store.subscribe(() => {
        router.route();
    });
}
init();
