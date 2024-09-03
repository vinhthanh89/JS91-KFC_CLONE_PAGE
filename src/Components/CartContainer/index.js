import "./style.css";
import ProductCartItem from "../ProductCartItem";
import couponData from "../../Data/couponData";
import { useState } from "react";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState(0 / 10);
  const cartData = useSelector((state) => state.cartData.value);

  const handleChangeCouponInput = (event) => {
    setCouponInput(event.target.value);
  };

  const handleAddCoupon = () => {
    const discount = couponData.find((item) => item.coupon === couponInput);
    if (discount) {
      setCoupon(discount.percent);
    } else {
      window.alert("mã giảm giá của bạn không tồn tại");
    }
    setCouponInput("");
  };

  const renderCartLocalData = cartData.map((item) => {
    return (
      <div className="productcart-item" key={item.id}>
        <ProductCartItem item={item} />
      </div>
    );
  });

  const billTotal = cartData.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const discount = billTotal * coupon;

  return (
    <div className="cart--section-container">
      <div className="productcart-container">{renderCartLocalData}</div>
      <div className="paycart-container">
        <div className="paycart__title border-bottom">
          <p>{cartData.length} MÓN</p>
        </div>
        <div className="paycart__coupon border-bottom">
          <p>Bạn có mã giảm giá ?</p>
          <div className="paycart__coupon--input">
            <input
              value={couponInput}
              onChange={handleChangeCouponInput}
              placeholder="Mã giảm giá"
              type="text"
            />
            <button onClick={handleAddCoupon}>Áp dụng</button>
          </div>
        </div>
        <div className="paycart__total border-bottom">
          <div className="paycart__total-item bill-total">
            <span>Tổng đơn hàng :</span>
            <span>{billTotal.toLocaleString()} đ</span>
          </div>
          <div className="paycart__total-item bill-total">
            <span>Discount :</span>
            <span>{discount.toLocaleString()} đ</span>
          </div>
          <div className="paycart__total-item pay-total">
            <span>Tổng thanh toán :</span>
            <span>{(billTotal - discount).toLocaleString()} đ</span>
          </div>
        </div>
        <button className="paycart__button">Thanh Toán</button>
      </div>
    </div>
  );
};

export default CartContainer;
