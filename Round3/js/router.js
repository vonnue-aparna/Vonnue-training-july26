const routes = ["/dashboard", "/Tasks"];

export function getCurrentRoute() {
  const hash = window.location.hash;

  if (!hash) {
    return "/dashboard";
  }
  const route = hash.replace("#", "");

  if (routes.includes(route)) {
    return route;
  }

  return "/dashboard";
}

export function initRouter(onRouteChange) {
  return function handleRouteChange() {
    const route = getCurrentRoute();

    if (window.location.hash !== `#${route}`) {
      window.location.hash = route;
    }
    onRouteChange();
  };
}
