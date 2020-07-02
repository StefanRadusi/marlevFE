import React, { useState } from "react";

import "./Calculator.scss";
import { PageTitle } from "../../common/PageTitle/PageTitle";
import { useGetPanel, getTitleName } from "./CalculatorUtils";
import { CalcPreview } from "./CalcPreview";
import { OfferSummery } from "./OfferSummery";

export function Calculator({
  match: {
    params: { item },
  },
}) {
  const { name } = useGetPanel(item);
  const [panel, setPanel] = useState({
    width: 1,
    height: 1,
    noOfLamella: 10,
    heightOfLamella: 0.1,
  });

  return (
    <div id="calculator-oferta" className="calculator-page">
      <h3 className="calculator-page-title">Calculator oferta</h3>
      <PageTitle title={getTitleName(name)} />
      <div className="calculator">
        <CalcPreview panel={panel} setPanel={setPanel} panelName={name} />
        <OfferSummery />
      </div>
    </div>
  );
}
