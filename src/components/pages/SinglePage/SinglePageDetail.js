import React from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";

export function SinglePageDetail(props) {
  const { detail, index, path } = props;

  return (
    <div className="detail-row">
      {index % 2 === 1 ? (
        <>
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
                <p>Calculator pret</p>
              </Link>
            </div>
          </div>
          <img src={detail.image} alt="img"></img>
        </>
      ) : (
        <>
          <img src={detail.image} alt="img" />
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
                <p>Calculator pret</p>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
