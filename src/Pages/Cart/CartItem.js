import React from 'react';
import './CartItem.css';
import {PlusCircleOutlined , MinusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd";

function CartItem({ item, updateQuantity, removeItem }) {
  const handleIncrease = () => {
    updateQuantity(item.id, item.productQuantity + 1);
  };

  const handleDecrease = () => {
    if (item.productQuantity > 1) {
      updateQuantity(item.id, item.productQuantity - 1);
    }
  };
  

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>{item.price.toLocaleString()} đ</p>
        <div className="incrementer--button">
          <Button disabled={item.productQuantity <= 1 ? "disabled" : ""} icon={<MinusCircleOutlined className="incrementer--decrease" onClick={handleDecrease} />} />
          <span>{item.productQuantity}</span>
          <Button icon={<PlusCircleOutlined className="incrementer--increase" onClick={handleIncrease} />} />
        </div>
        <button onClick={handleRemove}>Xóa</button>
      </div>
    </div>
  );
}

export default CartItem;
