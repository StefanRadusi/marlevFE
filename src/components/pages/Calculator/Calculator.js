import React from "react";

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

  return (
    <div id="calculator-oferta" className="calculator-page">
      <PageTitle title={getTitleName(name)} />
      <div className="calculator">
        <CalcPreview />
        <OfferSummery />
      </div>
    </div>
  );
}
