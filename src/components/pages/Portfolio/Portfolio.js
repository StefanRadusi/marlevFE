import React, { useState } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { portfolioData } from "./portfolioData";

import "./Portfolio.scss";
import { ImgPreview } from "./ImgPreview";

export function Portfolio() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(null);

  return (
    <div id="portofoliu" className="portfolio-page">
      <h1 className="portfolio-page-title">Portofoliu</h1>
      <div className="portfolio-page-img">
        <div className="portfolio-page-img-container">
          <GridList cellHeight={160} cols={3}>
            {portfolioData.map(({ img }, index) => (
              <GridListTile key={img} cols={1}>
                <img
                  src={img}
                  alt="img"
                  className="portfolio-img"
                  onClick={() => {
                    setPreviewOpen(true);
                    setImgIndex(index);
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>

      <ImgPreview
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        img={imgIndex !== null && portfolioData[imgIndex].img}
      />
    </div>
  );
}
