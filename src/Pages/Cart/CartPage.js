import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './CartPage.css';
import CartItem from './CartItem';



function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems && cartItems.length === 0) {
      setCartItems(storedCartItems);
    }
  }, [cartItems.length]);

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, productQuantity: newQuantity } : item
      )
    );
    updateLocalStorage(productId, newQuantity);
  };

  const removeItem = productId => {
    // setCartItems(prevItems =>
    //   prevItems.filter(item => item.id !== productId)
    // );
    // updateLocalStorage(productId, 0);
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
    updateLocalStorage(productId);
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // const updateLocalStorage = (productId, productQuantity) => {
  //   // const updatedCartItems = cartItems.map(item =>
  //   //   item.id === productId ? { ...item, productQuantity } : item
  //   // );
  //   // localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
  // };

  const updateLocalStorage = productId => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.productQuantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>GIỎ HÀNG CỦA TÔI</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="left-column">
            <div className="message">
              GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY
            </div>
            <NavLink to="/order/new-product"><button className="action-button">Bắt đầu đặt hàng</button></NavLink>
          </div>
          <img src="https://static.kfcvietnam.com.vn/images/web/empty-cart.png?v=5.0" alt="Empty Cart"/>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="total">Tổng: {totalPrice.toLocaleString()} đ</div>
          <div className="cart-actions">
            <button className="delete-all-button" onClick={removeAllItems}>Xóa hết</button>
            <button className="checkout-button" onClick={() => alert('Proceeding to checkout!')}>THANH TOÁN</button>
          </div>
          
        </>
      )}
    </div>
  );
}

export default CartPage;
