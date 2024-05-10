import React from 'react';
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Addproduct from "./Components/AddProduct/AddProduct";
import initialProductsData from "../src/data/products.json";

function App() {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  {
    /*we will pass an empty array as an initial state */
  }
  const [showAddProductSection, setShowAddProductSection] = useState(false);

  const [products, setproducts] = useState(initialProductsData);
  {
    /*We are rendering Products through state and getting it's initial value from data.json*/
  }



  function openCart() {
    setshowCart(true);
    console.log(showCart);
  }
  function closeCart() {
    setshowCart(false);
  }

  function openAddProductSection() {
    setShowAddProductSection(true);
  }
  function closeAddProductSection() {
    setShowAddProductSection(false);
  }

  const handleAddtoCart = (id, name, image) => {
    // console.log("added to cart");
    // console.log(name);

    // let updatedCartItems = cartItems;
    // updatedCartItems.push
    // (
    //     {
    //     id:id,
    //     name:name,
    //     image:image,
    //     quantity:1,
    //     }
    // )
    //   setcartItems(updatedCartItems); {/*This piece of code is wrong because we are mutating/changing the state of cartItems array without using the setState function which is absolutely wrong because may be we are pushing an object to updatedCartItems but since we have an assignement operator above so cartItems array is also getting mutated by default when we push an object to updatecartItems.*/}

    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    // id: id,
    // name: name,
    // image: image,
    // quantity: 1,
    // });
    // // Now we are using concat() function, it basically concatenates an object to an array and then returns a new array which is assigned to the array 'updatedCartItems' and then we set the state of cartItems array to updatedCartItems array, via this way we use set() function to change the state rather than forcefully mutating the state.
    // setcartItems(updatedCartItems);
    // The above piece of code is working absolutely fine.But,there is another shorter way to do this by passing a function in the set() function.
    // concat() function pushes an object without modifying the original array and modifies the new array.

    {
      /* Handling increment in quantity when the item on which we have clicked is already present in Cart */
    }
    {
      /* findIndex() basically works like :: it will iterate over each item of cartItems and when id of that item i.e. item.id matches with the id of product whose Add to Cart button was clicked then findIndex will return that id otherwise if the newly clicked product item is not already present in the Cart then findIndex returns -1 */
    }
    const ProductIndexInCart = cartItems.findIndex((item) => item.id === id);
    if (ProductIndexInCart === -1) {
      const newCartItem = {
        id: id,
        name: name,
        image: image,
        quantity: 1,
      };
      setcartItems((state) => [...state, newCartItem]);
      //Here, we basically pass a function to set () , the argument to that function is the state(which is cartItems array) and then we [...state] use spread operator to destructure the state array to break the array into elements and then we append the new object with all due properties to the array.
    } else {
      //The Product item already exists in the Cart then we just have to increment quantity of that item
      const updatecartItems = [...cartItems]; //We are copying via use of spread operator so it's call by Value , if we do updatecartItems = cartItems,then it's call by reference and both updateCartItems and cartItems will be pointing to the same array and both of them will get changed simultaneously.
      updatecartItems[ProductIndexInCart].quantity += 1;
      setcartItems(updatecartItems);
    }
  };

  const handlePlusClick = (id) => {
    const ProductIndexInCart = cartItems.findIndex((item) => item.id === id);
    const updatecartItems = [...cartItems]; //We are copying via use of spread operator so it's call by Value , if we do updatecartItems = cartItems,then it's call by reference and both updateCartItems and cartItems will be pointing to the same array and both of them will get changed simultaneously.
    updatecartItems[ProductIndexInCart].quantity += 1;
    setcartItems(updatecartItems);
  };

  const handleMinusClick = (id) => {
    const ProductIndexInCart = cartItems.findIndex((item) => item.id === id);
    let updatecartItems = [...cartItems]; //We are copying via use of spread operator so it's call by Value , if we do updatecartItems = cartItems,then it's call by reference and both updateCartItems and cartItems will be pointing to the same array and both of them will get changed simultaneously.
    if (updatecartItems[ProductIndexInCart].quantity > 1) {
      updatecartItems[ProductIndexInCart].quantity -= 1;
    } else {
      // updatecartItems = updatecartItems.filter((item,index) => index!== ProductIndexInCart);
      updatecartItems = updatecartItems.filter((item) => item.id !== id);
      {
        /* '.filter()': This is an array method in JavaScript used to create a new array with all elements that pass the test implemented by the provided function.*/
      }
    }
    setcartItems(updatecartItems);
  };

  const handleAddProduct=(productName) =>
  {
    // console.log(productName);
    const newProductItem = {
      id: products.length + 1,
      name: productName,
      // image: defaultProductimage,
      image:'default_product.png',
      quantity: 1,
    };
    setproducts((state) => [...state, newProductItem]);
    setShowAddProductSection(false);
    // or call closeAddPrroductSection();
  }

  return (
    <React.Fragment> 
      <Header
        openCart={openCart}
        openAddProductSection={openAddProductSection}
      />
      <Products products={products} onAddtoCart={handleAddtoCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        OnPlusClick={handlePlusClick}
        OnMinusClick={handleMinusClick}
      />
      <Addproduct
        showAddProductSection={showAddProductSection}
        closeAddProductSection={closeAddProductSection}
        onAddProduct={handleAddProduct}
      />
    </React.Fragment>
  );
}
export default App;
