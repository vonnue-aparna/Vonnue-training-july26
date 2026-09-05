import { StoreType } from "../types/timeTypes";

export function createRouter(store: StoreType) {
  let routes: string[] = [];
  function register(path: string) {
    routes.push(path);
  }

  function navigate(path: string) {
    const url = `/#${path}`;
    window.history.pushState({}, "", url);

    changeRoute();
  }

  function changeRoute() {
    const pathName = window.location.hash.slice(1) || "/dashboard";

    routes.forEach((route) => {
      if (route === pathName) {
        store.dispatch({
          type: "SET_ROUTE",
          payload: pathName,
        });
      }
    });
  }

  window.addEventListener("popstate", () => {
    changeRoute();
  });

  return { register, navigate, changeRoute };
}
