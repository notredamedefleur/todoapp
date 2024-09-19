import { ModalStyled } from "./styles.js";
import { useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, showModal }) => {
  return (
    <>
      {showModal &&
        createPortal(<ModalStyled>{children}</ModalStyled>, document.body)}
    </>
  );
};
