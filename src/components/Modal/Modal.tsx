import { ReactElement, useState } from "react";
import "./Modal.css";

interface Props {
  title: string;
  content: string;
  show?: boolean;
  // clickItem: (item: string) => void;
  children: ReactElement;
}
const Modal = ({ show = true }: Props) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <h4 className="modal__title">Modal title</h4>
          <span className="close">&times;</span>
        </div>

        <div className="modal__body">This is modal content</div>

        <div className="modal__footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
