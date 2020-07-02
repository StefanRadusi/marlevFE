import { PanelWilsonClassic } from "./PanelWilsonClassic/PanelWilsonClassic";

export function getPanelByName(panelName) {
  switch (panelName) {
    case "panou-gard-wilson-clasic":
      return PanelWilsonClassic;

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

export function calcNumberOfLamellas(height) {
  if (isNaN(Number(height))) {
    return 1;
  }

  return Math.floor(height * 10);
}
