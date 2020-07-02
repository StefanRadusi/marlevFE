import React, { Fragment } from "react";
import { HeaderButton } from "./HeaderButton";

export function MenuButtons({ currentPage }) {
  return (
    <Fragment>
      <HeaderButton to="/#home" text="ACASA" currentPage={currentPage} />
      <HeaderButton to="/#produse" text="PRODUSE" currentPage={currentPage} />
      <HeaderButton
        to="/#portofoliu"
        text="PORTOFOLIU"
        currentPage={currentPage}
      />
      <HeaderButton to="/#contact" text="CONTACT" currentPage={currentPage} />
    </Fragment>
  );
}
