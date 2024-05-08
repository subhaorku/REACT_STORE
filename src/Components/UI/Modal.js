import "./Modal.css";
function Modal({ show, close, children }) 
{
    if(!show)
        {
            return null;
        }
  return (
    <div className="backdrop" onClick={close}>
      <div className="modal" onClick={(event)=>event.stopPropagation()}>{children}</div> 
      {/* the event listener gets propagated from parent to child elements so here close event gets propagated to modal component and cart modal closes even clicking on modal component in order to stop closing of cart on clicking on modal component we implement stoppropagation() method on the event object on clicking on modal component */}
    </div>
  );
}
export default Modal;
