import React from "react";
import MaterialTable from 'material-table';
import "./OferteSalvate.scss";
import Button from "@material-ui/core/Button";

export default function OferteSavlate() {
    const [state, setState] = React.useState({
        columns: [
            {title: 'Titlu', field: 'title'},
            {title: 'Latime', field: 'width'},
            {title: 'Inaltime', field: 'height'},
            {title: 'Numar lamele', field: 'noOfLamella'},
            {title: 'Inaltime lamele', field: 'heightOfLamella'},
        ],
        data: JSON.parse(localStorage.getItem("cart-items")),
    });

    return (
        <div className="container-oferte">
            <MaterialTable
                title="Produse"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    localStorage.setItem("cart-items", JSON.stringify(data));
                                    return {...prevState, data};
                                });
                            }, 100);
                        }),
                }}
                options={{
                    actionsColumnIndex: -1,
                }}
            />
            <br/>
            <br/>
            <br/>
            <Button variant="contained" color="primary">
                Trimite
            </Button>
        </div>
    );
}