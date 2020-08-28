import { detailedGardList } from "../Products/data";

export function getPanel(path) {
  return detailedGardList.find((panel) => panel.path === path) || {};
}

export function getPanelListTitles() {
  return detailedGardList
    .filter((panel) => panel.title && panel.title.includes("Panou"))
    .map((panel) => panel.title);
}

export function titleToPath(title) {
  return (detailedGardList.find((panel) => panel.title === title) || {}).path;
}
