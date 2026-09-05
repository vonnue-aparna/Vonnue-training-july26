import { renderDashBoard, renderHomePage } from "./pages.js";
import { createRouter } from "./router.js";
import { createStore } from "./storageService.js";
import { Router, Store, Task } from "./types.js";


export let store: Store;
export let router: Router;

export async function init() {

    console.log("fetching local data.....")
    let tasks;
    let localData = localStorage.getItem("task-data")
    if (localData) {
        tasks = JSON.parse(localData)
    }

    let initialState: Task[] = localData ? tasks : []
    
    store = createStore(initialState)
    let router = createRouter()
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