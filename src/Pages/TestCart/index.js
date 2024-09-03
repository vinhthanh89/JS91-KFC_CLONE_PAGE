import EmtyCart from "../../Components/EmtyCart";
import CartContainer from "../../Components/CartContainer";
import "./style.css";
import { useSelector } from "react-redux";

const TestCart = () => {
  const cartData = useSelector((state) => state.cartData.value);
  return (
    <div className="cart-test-container">
      <div className="cart-test--title">
        <h2>GIỎ HÀNG CỦA TÔI</h2>
      </div>
      {cartData.length === 0 ? <EmtyCart /> : <CartContainer />}
    </div>
  );
};

export default TestCart;
