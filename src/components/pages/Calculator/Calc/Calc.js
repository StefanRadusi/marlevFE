import React, { useEffect, useState } from "react";

import { Dropdown } from "../../../common/Dropdown/Dropdown";
import { getPanel, getPanelListTitles, titleToPath } from "../CalculatorUtils";
import { PageTitle } from "../../../common/PageTitle";
import { CalcPreview } from "../CalcPreview";
import { DimensionsEditor } from "../CalcPreview/DimensionsEditor";
import { Cart } from "../Cart/Cart";

export function Calc({ item, history }) {
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

  useEffect(() => {
    setPanel({
      width: 1,
      height: 1,
      noOfLamella: initialNrOfLamella,
      heightOfLamella: initialHeightOfLamella,
    });
  }, [initialNrOfLamella, initialHeightOfLamella]);

  const titles = getPanelListTitles();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
