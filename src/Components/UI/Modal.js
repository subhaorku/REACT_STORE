import { createPortal } from "react-dom";
import "./Modal.css";
function Modal({ show, close, children }) {
  if (!show) {
    return null;
  }
  return createPortal(
    <div className="backdrop" onClick={close}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
      {/* the event listener gets propagated from parent to child elements so here close event gets propagated to modal component and cart modal closes even clicking on modal component in order to stop closing of cart on clicking on modal component we implement stoppropagation() method on the event object on clicking on modal component */}
    </div>,
    document.body
  );
}
// Initially backdrop was child of root, but now we want backdrop to be the child of body so we can port the jsx of backdrop to body
export default Modal;
