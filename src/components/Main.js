// import logo from './logo.svg';
import { useDispatch } from "react-redux";
import addToCart from "../redux/action";

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
    </div>
  );
}

export default Main;