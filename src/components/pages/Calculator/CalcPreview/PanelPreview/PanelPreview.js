import React, { useState, useEffect, useRef } from "react";

import "./PanelPreview.scss";
import {
  getPanelByName,
  geDimensionInPixel,
  calcScale,
} from "./panels/panelsUtils";

export function PanelPreview({
  width,
  height,
  nrOfPanels,
  heightOfLamella,
  panelName,
}) {
  const previewRef = useRef(null);
  const Panel = getPanelByName(panelName);
  const [scale, setScale] = useState(calcScale(null, null, 0.8));

  const widthInPx = geDimensionInPixel(width);
  const heightInPx = geDimensionInPixel(height);

  useEffect(() => {
    const panelDiv = previewRef.current;
    const container = panelDiv.parentNode;
    const newScale = calcScale(panelDiv, container, scale);

    setScale(newScale);
  }, [scale, widthInPx, heightInPx]);

  return (
    <div
      className="panel-preview-container"
      style={{
        width: widthInPx,
        height: heightInPx,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
      ref={previewRef}
    >
      {Panel && <Panel height={height} heightOfLamella={heightOfLamella} />}
    </div>
  );
}
