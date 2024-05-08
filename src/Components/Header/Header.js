import React from "react";
import "./Header.css";
function Header({ openCart, openAddProductSection }) {
  // const[showCart,setshowCart] = useState(false);

  // function openCart()
  // {
  //     setshowCart(true);
  // }
  // function closeCart()
  // {
  //     setshowCart(false);
  // }

  return (
    <div className="header">
      <h1>My React Store</h1>
      <div>
        <button
          className="yellow-button"
          onClick={openAddProductSection}
          style={{ marginRight: "25px" }}
        >
          Add Product
        </button>
        {/* <button className='yellow-button' onClick={handleClickAddProduct}>Add Product</button> */}

        <button className="yellow-button" onClick={openCart}>
          {" "}
          Cart{" "}
        </button>
        {/* <button className='yellow-button' onClick={handleClickAddProduct}>Add Product</button> */}
      </div>

      {/*backdrop is a div whose opacity is set to some value so that it appears a bit transparent and on that we will have a modal opened*/}
      {/* {showCart && (<div className='backdrop' onClick={closeCart}>
            <div className='modal'>
                Hello from Cart
            </div>
             </div>)} */}
      {/* <Modal showCart={showCart} closeCart={closeCart}> Hello from Cart</Modal> */}
    </div>
  );
}

export default Header;
