import { renderDashBoard, renderHomePage } from "./pages.js";
import { createRouter } from "./router.js";
import { createStore } from "./storageService.js";
export let store;
export let router;
export async function init() {
    console.log("fetching local data.....");
    let tasks;
    let localData = localStorage.getItem("task-data");
    if (localData) {
        tasks = JSON.parse(localData);
    }
    let initialState = localData ? tasks : [];
    store = createStore(initialState);
    let router = createRouter();
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
