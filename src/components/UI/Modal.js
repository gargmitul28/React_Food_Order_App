import React from "react";
import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalCont = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClose={props.close} />,
        document.getElementById("modal")
      )}{" "}
      ;{" "}
      {reactDom.createPortal(
        <ModalCont>{props.children}</ModalCont>,
        document.getElementById("modal-cont")
      )}
      ;
    </>
  );
};

export default Modal;
