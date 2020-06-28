import React, { useState } from "react";
import { GridList, GridListTile } from "@material-ui/core";

import "./ImagePreviewList.scss";
import { ImgPreview } from "../../Portfolio/ImgPreview";

export function ImagePreviewList(props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(null);
  const {elementList} = props;

  return (
      <div id="balustrade" className="balustrade-page">
        <div className="balustrade-page-img">
          <div className="balustrade-page-img-container">
            <GridList cellHeight={160} cols={3}>
              {elementList.map(({ img }, index) => (
                  <GridListTile key={img} cols={1}>
                    <img
                        src={img}
                        alt="img"
                        className="balustrade-img"
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
            img={imgIndex !== null && elementList[imgIndex].img}
        />
      </div>
  );
}
