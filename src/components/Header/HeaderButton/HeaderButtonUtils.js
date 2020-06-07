import { mergeCssClass } from "../../../utils/utils";

function textToPage(text) {
  switch (text) {
    case "ACASA":
      return "home";

    case "PRODUSE":
      return "produse";

    case "PORTOFOLIU":
      return "portofoliu";

    case "CALCULATOR":
      return "calculator";

    case "CONTACT":
      return "contact";

    default:
      return "";
  }
}

export function getCssClass(currentPage, text) {
  console.log(currentPage, text);
  const isActive = currentPage === textToPage(text);

  return mergeCssClass("header-button", isActive && "header-button--active");
}
