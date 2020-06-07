export function mergeCssClass(...params) {
  return params.filter((cssClass) => cssClass).join(" ");
}

export function getCurrentPage(location) {
  const { pathname } = location;
  const [, page] = pathname.split("/");

  if (page === "") return "home";

  return page;
}
