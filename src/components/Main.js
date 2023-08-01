// import logo from './logo.svg';
import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    price: 54000,
    category: "mobile",
    color: "red",
  };
  return (
    <div className="Main">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
  );
}

export default Main;