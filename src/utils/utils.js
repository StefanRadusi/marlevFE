export function mergeCssClass(...params) {
  return params.filter((cssClass) => cssClass).join(" ");
}

export function getCurrentPage(location) {
  const { pathname, hash } = location;

  if (hash) return hash.substring(1);
  const [, page] = pathname.split("/");

  if (page === "") return "home";

  return page;
}
