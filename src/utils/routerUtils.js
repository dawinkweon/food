export const toReactRouterRoutes = (routes) => {
  return Object.keys(routes).map((k) => {
    const r = routes[k];
    const { path, component } = r;
    console.debug("r: " + JSON.stringify(r));
    return {
      path,
      element: component,
    };
  });
};
