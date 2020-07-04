import React from "react";

import "./SinglePage.scss";
import { detailedGardList } from "../Products/data";
import { ImagePreviewList } from "../Products/ImagePreviewList";
import {SinglePageDetail} from "./SinglePageDetail";

export class SinglePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { path } = this.props.match.params;
    path = path.replace("/panou", "");
    const gard = detailedGardList.find((obj) => {
      return obj.path === path;
    });

    return (
      <div className="single-page-container">
        <div className="single-page-container__title">
          <h1 className="gard-title">{gard.title}</h1>
          <span className="gard-separator-line"/>
        </div>
        <div className="single-page-container__content">
          {
            gard.details.map((detail, index) => {
              return <SinglePageDetail key={index} detail={detail} index={index}/>
            })
          }
        </div>
        <ImagePreviewList elementList={gard.images} />
      </div>
    );
  }
}
