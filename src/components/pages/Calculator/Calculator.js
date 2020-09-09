import React, { useState } from "react";

import "./Calculator.scss";
import { PageTitle } from "../../common/PageTitle/PageTitle";
import { getPanel, getPanelListTitles, titleToPath } from "./CalculatorUtils";
import { CalcPreview } from "./CalcPreview";
import { DimensionsEditor } from "./CalcPreview/DimensionsEditor";
import { Dropdown } from "../../common/Dropdown/Dropdown";
import { Cart } from "./Cart/Cart";

export function Calculator({
  match: {
    params: { item },
  },
  history,
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

  const titles = getPanelListTitles();
  console.log(titles);

  return (
    <div id="calculator-oferta" className="calculator-page">
      <Dropdown
        options={titles}
        selectedOption={title}
        handleChange={(title) => {
          console.log(title);
          history.push(titleToPath(title));
        }}
      />

      <PageTitle title={"Creare Oferta"} />
      <div className="calculator">
        <CalcPreview panel={panel} panelName={item} />
        <div className="calculator-side-wrapper">
          <DimensionsEditor
            {...panel}
            setPanelWidth={(width) => setPanel({ ...panel, width })}
            setPanelHeight={(height) => setPanel({ ...panel, height })}
            setHightOfLamella={(heightOfLamella) =>
              setPanel({ ...panel, heightOfLamella })
            }
            lamellaOptions={lamellaOptions}
            panelType={item}
          />
          <Cart panel={panel} item={getPanel(item)} />
        </div>
      </div>
    </div>
  );
}
