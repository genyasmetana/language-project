import React, { Fragment } from 'react';
import './styles.scss';

interface IModalWindow {
  children: React.ReactNode;
  isOpen: boolean;
  closeHandler: (value: boolean) => void;
}

export const ModalWindow: React.FC<IModalWindow> = ({ children, isOpen, closeHandler }) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return isOpen ? (
    <Fragment>
      <div className="overlay" onClick={() => closeHandler(false)} />
      <div className="modal">
        <div>{children}</div>
      </div>
    </Fragment>
  ) : null;
};
