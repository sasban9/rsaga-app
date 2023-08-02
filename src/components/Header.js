import { Badge } from "@mui/material";
import { useSelector } from "react-redux"
import { ShoppingBag } from "@mui/icons-material";

const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png" height={40} style={{margin:20}} alt="logo" />
            <Badge badgeContent={result.length} color="primary" style={{ margin:20}}>
                <ShoppingBag color="action" />
            </Badge>
            {/* <div className="cart-div">
                <span>{result.length}</span>
                <img alt="cart-icon" src="https://static.vecteezy.com/system/resources/previews/019/787/045/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" />
            </div> */}
        </header>
    )
}

export default Header;