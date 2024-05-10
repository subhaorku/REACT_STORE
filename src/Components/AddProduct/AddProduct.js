import { useRef } from "react";
import { useState } from "react";
import Modal from "../UI/Modal";
import "./AddProduct.css";

function Addproduct({
  showAddProductSection,
  closeAddProductSection,
  onAddProduct,
}) {
  // const nameRef = useRef("");
  const [Productname, setProductname] = useState("");
  let variable = "Subhasini";

  {
    /*' handleSubmit' will get event object as parameter. on Submit the default thing which happens is that the page gets refreshed but we have to prevent refreshing of page and update DOM without refreshing the page so we do event.preventDefault() */
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const nameValue = nameRef.current.value;
    // The input tag will get printed by doing nameRef.current
    onAddProduct(Productname);
  }

  // function handleChange(event) {
  //   const enteredName = event.target.value;
  //   console.log(enteredName);
  //   setProductname(enteredName);
  // }
  // const handleProductNameChange = (event) => {
  //   const enteredName = event.target.value;
  //   setProductname(enteredName);
  // };

  {
    /*The function handleChange will get triggered for each and every key stroke */
  }

  function handleProductNameChange(value) {
    console.log(Productname);
    setProductname(value);
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
            {/* <input className="form-input" name="Product Name" ref={nameRef} /> */}
            {/* When we have defined any element in my DOM and we have to refer that element to any function then we use 'useRef' hook */}
            <input
              className="form-input"
              value={Productname}
              onChange={(event) => handleProductNameChange(event.target.value)}
            />
            {/* We will pass a Value Prop in which we have given a state and onChange function will basically set the state based on user input we cant do  value={variable} because if we  take a variable then the component will not get re-rendered on change of the value of the variable */}
            {/*Even if we don't use value={Productname} still it works the same way because we are not using the 'value' prop, but we should use it for 'two-way-binding' */}
            <button type="submit" className="yellow-button submit-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

{
  /* While using useRef we were getting the final value of the entered product when submit button is hit but by using useState we are changing the product name on each and every key stroke and we pass the state to the onAddProduct function when submit button is hit */
}
export default Addproduct;
