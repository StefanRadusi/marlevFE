import React, { useState } from "react";

import "./Calculator.scss";
import { PageTitle } from "../../common/PageTitle/PageTitle";
import { getPanel } from "./CalculatorUtils";
import { CalcPreview } from "./CalcPreview";
import { DimensionsEditor } from "./CalcPreview/DimensionsEditor";

export function Calculator({
  match: {
    params: { item },
  },
}) {
  const {
    title,
    initialNrOfLamella,
    initialHeightOfLamella,
    lamellaOptions,
  } = getPanel(item);

  const [panel, setPanel] = useState({
    width: 1,
    height: 1,
    noOfLamella: initialNrOfLamella,
    heightOfLamella: initialHeightOfLamella,
  });

  return (
    <div id="calculator-oferta" className="calculator-page">
      <h3 className="calculator-page-title">Creare Oferta</h3>
      <PageTitle title={title} />
      <div className="calculator">
        <CalcPreview panel={panel} setPanel={setPanel} panelName={item} />
        <DimensionsEditor
          {...panel}
          setPanelWidth={(width) => setPanel({ ...panel, width })}
          setPanelHeight={(height) => setPanel({ ...panel, height })}
          setHightOfLamella={(heightOfLamella) =>
            setPanel({ ...panel, heightOfLamella })
          }
          lamellaOptions={lamellaOptions}
        />
      </div>
    </div>
  );
}
