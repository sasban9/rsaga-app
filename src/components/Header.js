import { useSelector } from "react-redux"

const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <header>
            <div className="cart-div">
                <span>{result.length}</span>
                <img alt="cart-icon" src="https://static.vecteezy.com/system/resources/previews/019/787/045/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" />
            </div>
        </header>
    )
}

export default Header;