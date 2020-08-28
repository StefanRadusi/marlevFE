import React from "react";

import "./PanelWilsonClassic.scss";

import { calcNumberOfLamellaWillson } from "./PanelWilsonUtils";

export function PanelWilsonClassic({ height, heightOfLamella }) {
  const nrOfLamella = calcNumberOfLamellaWillson(height, heightOfLamella);

  return (
    <div className="panel-wilson-classic">
      <div className="panel-wilson-classic-left" />
      <div className="panel-wilson-classic-up" />
      <div className="panel-wilson-classic-right" />

      {Array.from(Array(nrOfLamella)).map((_, index) => (
        <div key={index} className="panel-wilson-classic-lamella">
          <div className="panel-wilson-classic-lamella-front" />
        </div>
      ))}
    </div>
  );
}
