import React from "react";

import MaterialTable from "material-table";
import ButonTrimiteOferta from "./ButonTrimiteOferta";

import "./OferteSalvate.scss";

export default function OferteSavlate() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Nume gard", field: "title" },
      { title: "Latime", field: "width" },
      { title: "Inaltime", field: "height" },
      { title: "Numar lamele", field: "noOfLamella" },
      { title: "Inaltime lamele", field: "heightOfLamella" },
      { title: "Pret", field: "priceDisplayed" },
    ],
    data: JSON.parse(localStorage.getItem("cart-items")) || [],
  });
  let total = 0;

  if (state.data && state.data.length > 0) {
    state.data.forEach((item) => (total += item.price));
  }

  console.log("data", state.data);

  return (
    <div className="container-oferte">
      <MaterialTable
        title="Produse"
        columns={state.columns}
        data={state.data}
        actions={[
          {
            icon: "delete",
            tooltip: "Sterge produs",
            onClick: (event, rowData) => {
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(rowData), 1);
                localStorage.setItem("cart-items", JSON.stringify(data));
                return { ...prevState, data };
              });
            },
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
      <br />
      <br />
      <br />
      <p>Total: {total} Ron</p>
      <ButonTrimiteOferta oferta={state.data} />
    </div>
  );
}
