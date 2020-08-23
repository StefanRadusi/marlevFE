import React from "react";

import "./SinglePage.scss";
import { detailedGardList } from "../Products/data";
import { ImagePreviewList } from "../Products/ImagePreviewList";
import { SinglePageDetail } from "./SinglePageDetail";
import { PageTitle } from "../../common/PageTitle";

export class SinglePage extends React.Component {
  render() {
    let { path } = this.props.match.params;
    path = path.replace("/panou", "");
    const gard = detailedGardList.find((obj) => {
      return obj.path === path;
    });

    return (
      <div className="single-page-container">
        <PageTitle title={gard.title} />
        <div className="single-page-container__content">
          {gard.details.map((detail, index) => {
            return (
              <SinglePageDetail
                key={`${detail}-${index}`}
                detail={detail}
                index={index}
                path={gard.path}
              />
            );
          })}
        </div>
        <ImagePreviewList elementList={gard.images} />
      </div>
    );
  }
}
