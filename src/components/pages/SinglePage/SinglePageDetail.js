import React from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";

export function SinglePageDetail(props) {
  const { detail, path } = props;

  return (
    <div className="detail-row">
      <div className="detail-row__content-container">
        <h2>{detail.subtitle}</h2>
        <div className="detail-row__content-description">
          {detail.description.map((phrase, index) => {
            return <p key={index}>{phrase}</p>;
          })}
        </div>
        <div className="detail-row_content-calculator">
          <Link
            to={`/calculator-oferta/${path}`}
            className="detail-row_content-calculator"
          >
            <div className="detail-row_content-calculator__container">
              <AddIcon />
              <RemoveIcon />
            </div>
            <p>Calculator oferta</p>
          </Link>
        </div>
      </div>
      <div className="detail-row__content-container">
        <img src={detail.image} alt="img"></img>
      </div>
    </div>
  );
}
