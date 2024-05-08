import Modal from "../UI/Modal";
import "./Cart.css";
function CartItem({ id, name, image, quantity, onPlusClick, onMinusClick }) {
  //   console.log(id, name, image, quantity);

  return (
    <div className="cart-item">
      <div className="item-img">
        {/* {" "} */}
        <img src={require(`../../assets/${image}`)} alt={name} />{" "}
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          Qty:{quantity}
          <div>
            <button
              className="yellow-button qty-button qty-plus-button"
              onClick={()=>onPlusClick(id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="yellow-button qty-button qty-plus-button"
              onClick={()=>onMinusClick(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart({ showCart, closeCart, cartItems,OnPlusClick,OnMinusClick }) {
    // const handlePlusClick(id)
    // {
       
    // }
    // const handleMinusClick(id)
    // {
     
    // }
  return (
    <div>
      <Modal show={showCart} close={closeCart}>
        <div className="cart-container">
          <div className="cart-heading">Your Cart</div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                quantity={item.quantity}
                onPlusClick={OnPlusClick}
                onMinusClick={OnMinusClick}
              />
            ))
          ) : (
            <div className="empty-cart">Your Cart is empty currently!</div>
          )}
          {/* {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
            />
          ))} */}

          <div className="cart-buttons">
            <button className="black-button" onClick={closeCart}>
              Close
            </button>
            {cartItems.length > 0 && (
              <button className="yellow-button" onClick={closeCart}>
                CheckOut
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
