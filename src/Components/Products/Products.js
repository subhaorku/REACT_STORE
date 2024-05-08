// import productsData from "../../data/products.json";
import "./Products.css";

// The Product Component is rendering each product and it receives data through 'children props'.
function Product({ id, name, image ,onAddtoCart }) {
  return (
    <div key={id} className="product">
      {" "}
      {/* Whenever we are doing mapping then we should give key to each of the divs created for a product and that key should be unique.Here we are getting a product after mapping and we have to create a jsx for each product */}
      <img src={require(`../../assets/${image}`)} alt={name} /> {/* We can dynamically render image by using 'require' function in React*/}
      <div className="product-name">{name}</div>
      <button onClick={()=>onAddtoCart(id,name,image)}>Add to Cart</button>
    </div>
  );
}

{/* We have got an array of objects, since products.json file is having a square bracket and it's having an array of object and each object has 3 properties.*/}
{/* We are having an array of objects and we have to build a product from each object so we have to map each object to a product */ }
// mapping of productsData's  objects to create a product and we have to return jsx of that newly built product.
function Products({products,onAddtoCart}) {
  return (
    <div className="products-container">
      {products.map((product) => (
        //  <div key={product.id} className='product'>  {/* Whenever we are doing mapping then we should give key to each of the divs created for a product and that key should be unique.Here we are getting a product after mapping and we have to create a jsx for each product */}
        //  <img src ={require(`../../assets/${product.image}`)} alt={product.name}/>
        //   <div className='product-name'>{product.name}</div>
        //   <button>Add to Cart</button>
        // </div>
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          onAddtoCart={onAddtoCart}
        />
      ))}
    </div>
  );
}
export default Products;
