import { detailedGardList } from "../Products/data";

export function getPanel(path) {
  console.log(path);

  return detailedGardList.find((panel) => panel.path === path) || {};
}
