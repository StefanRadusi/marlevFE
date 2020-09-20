import React from "react";
import Button from "@material-ui/core/Button";
import { trimiteOferta } from "./trimiteOferta";

export default class ButonTrimiteOferta extends React.Component {
  render() {
    const { oferta } = this.props;

    return (
      <Button
        title="Completeaza campurile de mai sus"
        variant="outlined"
        onClick={() => trimiteOferta(oferta)}
        disabled={!(oferta && oferta.length > 0)}
      >
        Trimite
      </Button>
    );
  }
}
