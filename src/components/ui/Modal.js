import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const onClickCloseButton = () => {
    props.onModalClose();
  };

  return (
    <div className={`${classes[""]} ${props.error ? classes.error : ""}`}>
      <div className={classes.darkBackGround}>
        <div className={classes.modalWindow}>
          <div className={classes.modalWindowHeader}>
            <h1 className={classes.modalWindowHeaderText}>Invalid input</h1>
          </div>
          <div className={classes.modalWindowBody}>
            <div>{props.children}</div>
            <div className={classes.modalWindowActions}>
              <button
                type="button"
                className={classes.closeButton}
                onClick={onClickCloseButton}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
