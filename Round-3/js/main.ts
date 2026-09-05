import { renderDashBoard, renderHomePage } from "./pages.js";
import { createRouter } from "./router.js";
import { createStore } from "./storageService.js";
import { Router, Store, Task } from "./types.js";


export let store: Store;
export let router: Router;

async function init() {

    let initialState: Task[] = []
    
    store = createStore(initialState)
    router = createRouter()
    router.register('/', () => renderHomePage())
    router.register('/dashboard', () => renderDashBoard())


    document.querySelectorAll("a").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault()

            let path = element.getAttribute("href")
            console.log('routing')
            if(path) router.navigate(path)
        })
    })

    store.subscribe(() => {
        router.route()
    })
}


init()