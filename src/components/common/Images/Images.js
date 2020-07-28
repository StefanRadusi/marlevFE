import React, {useState} from 'react';
import {GridList, GridListTile} from '@material-ui/core';
import {ImgPreview} from '../../pages/Portfolio/ImgPreview';

import './Images.scss';

export function Images({images}) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [img, setImg] = useState(null);

  return (
      <div className="images">
        <div className="page-img">
          <div className="page-img-container">
            <GridList cellHeight={160} cols={3}>
              {images.map(({img}, index) => (
                  <GridListTile key={img} cols={1}>
                    <img
                        src={img}
                        alt="img"
                        className="img"
                        onClick={() => {
                          setPreviewOpen(true);
                          setImg(img);
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
            img={img}
        />
      </div>
  );
}
