import { useRef } from "react";
import Modal from "../UI/Modal";
import "./AddProduct.css";

function Addproduct({ showAddProductSection, closeAddProductSection ,onAddProduct }) {
  const nameRef = useRef("");
 
 
  {
    /*' handleSubmit' will get event object as parameter. on Submit the default thing which happens is that the page gets refreshed but we have to prevent refreshing of page and update DOM without refreshing the page so we do event.preventDefault() */
  }


  function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    console.log(nameValue);
    // The input tag will get printed by doing nameRef.current

    onAddProduct(nameValue);
  }
  return (
    <Modal show={showAddProductSection} close={closeAddProductSection}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product</div>
        <form onSubmit={handleSubmit}>
          {" "}
          {/*As soon as we click on  submit button the onSubmit event gets triggered*/}
          <div className="add-product-form">
            <div className="form-label">Enter Product Name</div>
            <input className="form-input" name="Product Name" ref={nameRef} />
            {/* When we have defined any element in my DOM and we have to refer that element to any function then we use 'useRef' hook */}
            <button type="submit" className="yellow-button submit-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
export default Addproduct;
