import { mergeCssClass } from "../../../utils/utils";

export function getCssClass(location, to) {
  const isActive =
    `${location.pathname}${location.hash}` === to ||
    (to === "/#home" && `${location.pathname}${location.hash}` === "/");

  return mergeCssClass("header-button", isActive && "header-button--active");
}
