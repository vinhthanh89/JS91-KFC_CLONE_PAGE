import EmtyCart from "../../Components/EmtyCart";
import CartContainer from "../../Components/CartContainer";
import "./style.css";

const TestCart = ({
  cartLocalData,
  handleDeleteProductCart,
  handleIncreProductQuantity,
  handleDecreProductQuantity,
}) => {
  return (
    <div className="cart-test-container">
      <div className="cart-test--title">
        <h2>GIỎ HÀNG CỦA TÔI</h2>
      </div>
      {cartLocalData.length === 0 ? (
        <EmtyCart />
      ) : (
        <CartContainer
          cartLocalData={cartLocalData}
          handleDeleteProductCart={handleDeleteProductCart}
          handleIncreProductQuantity={handleIncreProductQuantity}
          handleDecreProductQuantity={handleDecreProductQuantity}
        />
      )}
    </div>
  );
};

export default TestCart;
