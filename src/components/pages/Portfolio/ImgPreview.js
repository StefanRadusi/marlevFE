import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import "./ImgPreview.scss";

export function ImgPreview({ open, onClose, img }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropComponent={(props) => (
        <Backdrop
          {...props}
          classes={{
            root: "img-preview-backdrop",
          }}
        />
      )}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        {
          <div className="img-preview-container">
            <CancelIcon
              fontSize="large"
              className="img-preview-close"
              onClick={onClose}
            />
            <div className="img-preview-img">
              {img && <img src={img} alt="img" />}
            </div>
          </div>
        }
      </Fade>
    </Modal>
  );
}
