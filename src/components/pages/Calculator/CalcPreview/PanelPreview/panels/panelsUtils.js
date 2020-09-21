import { PanelWilsonClassic } from "./PanelWilsonClassic/PanelWilsonClassic";
import { PanelVarsoviaClassic } from "./PanelVarsovia/PanelVarsoviaClassic";
import { PanelWilsonRamen } from "./PanelWilsonRamen/PanelWilsonRamen";
import { PanelVarsoviaClassicRamen } from "./PanelVarsoviaRamen/PanelVarsoviaClassicRamen";
import { PanelBarcelonaClasic } from "./PanelBarcelonaClassic/PanelBarcelonaClassic";
import { PanelBarcelonaRamen } from "./PanelBarcelonaRamen/PanelBarcelonaRamen";

export function getPanelByName(panelName) {
  switch (panelName) {
    case "panou-de-gard-wilson":
      return PanelWilsonClassic;
    case "panou-de-gard-wilson-ramen":
      return PanelWilsonRamen;
    case "panou-de-gard-varsovia":
      return PanelVarsoviaClassic;
    case "panou-de-gard-varsovia-ramen":
      return PanelVarsoviaClassicRamen;
    case "panou-de-gard-barcelona":
      return PanelBarcelonaClasic;
    case "panou-de-gard-barcelona-ramen":
      return PanelBarcelonaRamen;

    default:
      return null;
  }
}

export function geDimensionInPixel(dimension) {
  return `${500 * dimension}px`;
}

export function calcScale(panel, container, originalScale) {
  if (panel && container) {
    const {
      width: widthPanel,
      height: heightPanel,
    } = panel.getBoundingClientRect();
    const {
      width: widthContainer,
      height: heightContainer,
    } = container.getBoundingClientRect();

    const deltaWidth = widthPanel - widthContainer;
    const deltaHeight = heightPanel - heightContainer;

    if (deltaWidth > -100 || deltaHeight > -100) {
      return Math.round((originalScale - 0.02) * 100) / 100;
    }
  }

  return Math.round(originalScale * 100) / 100;
}
