import { ComponentType } from "react";

interface Props {
  title: string;
  content: string;
  show?: boolean;
}
const withModal =
  (Component: any) =>
  ({ title, content, show = false }: Props) => {
    return (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <h4 className="modal__title">{title}</h4>
            <span className="close">&times;</span>
          </div>

          <div className="modal__body">
            <Component />
          </div>

          <div className="modal__footer">
            <button className="btn btn--accent">Submit</button>
          </div>
        </div>
      </div>
    );
  };

export default withModal;
