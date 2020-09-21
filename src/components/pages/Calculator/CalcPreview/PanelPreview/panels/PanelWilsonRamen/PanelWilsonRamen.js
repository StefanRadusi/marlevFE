import React from "react";

import "./PanelWilsonRamen.scss";

import { calcNumberOfLamellaWillson } from "./PanelWilsonRamenUtils";

export function PanelWilsonRamen({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaWillson(height, heightOfLamella);
  console.log(nrOfLamella);

  return (
      <div className="panel-wilson-ramen">
        <div className="panel-wilson-ramen-left" />
        <div className="panel-wilson-ramen-inner left" />
        <div className="panel-wilson-ramen-up" />
        <div className="panel-wilson-ramen-right" />
        <div className="panel-wilson-ramen-inner right" />
        <div className="panel-wilson-ramen-bottom" />

        {Array.from(Array(nrOfLamella)).map((_, index) => (
            <div key={index} className="panel-wilson-ramen-lamella">
              <div className="panel-wilson-ramen-lamella-front" />
            </div>
        ))}
      </div>
  );
}
