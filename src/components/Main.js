// import logo from './logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { Button, ButtonGroup } from "@mui/material";
import { Circle, ShoppingBagSharp, ShoppingBagTwoTone } from "@mui/icons-material";
import { productList } from "../redux/product/action";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productData);
  console.log("data in main ", data);
  const products = [
    {
      id: 1,
      name: "Nike Tshirt",
      price: 5400,
      category: "fashion",
      color: "grey",
      photo: "https://assets.ajio.com/medias/sys_master/root/20210408/D3YP/606dff1ef997dd7b64a6cb46/-1117Wx1400H-460833728-clearblack-MODEL.jpg"
    }, {
      id: 2,
      name: "Apple iPhone",
      price: 54000,
      category: "mobile",
      color: "red",
      // photo: "https://rukminim2.flixcart.com/image/850/1000/ktketu80/mobile/x/r/4/iphone-13-mlpj3hn-a-apple-original-imag6vpywmfv9wg4.jpeg?q=90",
      photo: "https://i.ytimg.com/vi/_wSXBkoCTzM/maxresdefault.jpg"
    }, {
      id: 3,
      name: "Samsung M40",
      price: 29999,
      category: "mobile",
      color: "blue",
      photo: "https://static.toiimg.com/photo/69754714.cms"
    }, {
      id: 4,
      name: "Reebok Sports Shoes",
      price: 9995,
      category: "shoes",
      color: "white black grey",
      photo: "https://images.jdmagicbox.com/quickquotes/images_main/reebok-men-s-classics-leather-mu-shoes-black-true-grey-white-red-size-10-160088686-ebljl.png"
    },
  ];
  return (
    <div className="Main">
      {/* <button>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}

      {products.map((product) => {
        return <div className="product-card" key={product.id}>
          <h2 style={{margin:0}}>{product.name}</h2>
          <div>Price: {product.price}</div>
          <div>Category: {product.category}</div>
          <div>Color: {product.color} <Circle sx={{ color: product.color }} /> </div>
          <ButtonGroup>
            <Button variant="outlined" onClick={() => dispatch(addToCart(product))}>Add <ShoppingBagTwoTone /></Button>
            <Button variant="outlined" onClick={() => dispatch(removeFromCart(product.id))}>Remove <ShoppingBagSharp /></Button>
          </ButtonGroup>
          <br/><br/>
          <div style={{width:300,height:300,background:`url(${product.photo}) no-repeat 50% 50%`,backgroundSize:"contain",border:"solid 1px #eee"}}></div>
        </div>
      })}
      <hr style={{width:'100%'}} />
      <div>
        <Button variant="contained" onClick={() => dispatch(emptyCart())}>Empty <ShoppingBagTwoTone /></Button>
        <Button variant="outlined" onClick={() => dispatch(productList())}>Product List <ShoppingBagTwoTone /></Button>
        </div>
    </div>
  );
}

export default Main;