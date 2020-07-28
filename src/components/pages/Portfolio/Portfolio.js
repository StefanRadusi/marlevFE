import React from "react";
import { portfolioData } from "./portfolioData";

import { PageTitle } from "../../common/PageTitle";
import {Images} from '../../common/Images/Images';
import "./Portfolio.scss";

export function Portfolio() {
  return (
    <div id="portofoliu" className="portfolio-page">
      <PageTitle title="Portofoliu" />
      <Images images={portfolioData}/>
    </div>
  );
}
