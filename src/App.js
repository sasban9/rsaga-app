// import logo from './logo.svg';
import "./App.css";
import { useDispatch } from "react-redux";
import addToCart from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    price: 54000,
    category: "mobile",
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default App;
