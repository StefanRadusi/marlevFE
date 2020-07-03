import React from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export function SinglePageDetail(props) {
  const { detail, index } = props;

  return (
    <div className="detail-row">
      {index % 2 === 1 ? (
        <>
          <div className="detail-row__content-container">
            <h2>{detail.subtitle}</h2>
            <div className="detail-row__content-description">
              {detail.description.map((phrase, index) => {
                return <p>{phrase}</p>;
              })}
            </div>
            <div className="detail-row_content-calculator">
              <AddIcon />
              <RemoveIcon />
            </div>
          </div>
          <img src={detail.image}></img>
        </>
      ) : (
        <>
          <img src={detail.image} />
          <div className="detail-row__content-container">
            <h2>{detail.subtitle}</h2>
            <div className="detail-row__content-description">
              {detail.description.map((phrase, index) => {
                return <p>{phrase}</p>;
              })}
            </div>
            <div className="detail-row_content-calculator">
              <div className="detail-row_content-calculator__container">
                <AddIcon />
                <RemoveIcon />
              </div>
              <p>Calculator pret</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
