import { init } from "./main.js";
import { Route } from "./types.js";

export function createRouter() {
    let routes:Route[] = []

    function register(path: string,component:()=>void){
        routes.push({
            path,
            component
        })
    }

    function navigate(path: string) {
        history.pushState({}, "", path);
        route()
    }

    function route() {
        console.log('inside route')
        let path = window.location.pathname
        let route = routes.find(r => r.path === path)
        console.log(route)
        if(route) route.component()
    }

    window.onload = () => {
        console.log("onloading...")
        init()
        route()
    }

    window.addEventListener("popstate", () => {
        route()
    })

    return {
        register,
        navigate,
        route
    }
}