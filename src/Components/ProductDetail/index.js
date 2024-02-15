import {PlusCircleOutlined , MinusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Notification from "../Notification/Notification";

const ProductDetail = ({data}) => {
  const [productQuantity , setProductQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const urlParam  = useParams(); 
  const foundObject = (data.find((item) => item.id === urlParam.productId) || []);
  const { image , title , description , price , id } = foundObject;
  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, [id]);
  
  
  const addToCart = () => {
    setShowNotification(true);
    console.log(showNotification)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].productQuantity += productQuantity;
    } else {
      updatedCartItems.push({
        id: id,
        title: title,
        price: price,
        image: image,
        productQuantity: productQuantity
      });
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };


    return (
    <div className="productdetail-container">
      {showNotification && (
        <Notification
          message={`${productQuantity} ${title} đã được thêm vào giỏ hàng`}
        />
      )}
      <div className="productdetail__image">
        <img
          src={`${image}`}
          alt=""
        />
      </div>
      <div className="productdetail__order-container">
      <div className="productdetail__order">
        <div className="productdetail__order--info">
          <p className="productdetail__order--info title">{title}</p>
          <p className="productdetail__order--info description">
            {description}
          </p>
        </div>
        <hr />
        <div className="productdetail__order--button">
            <div className="incrementer--button">
                <Button disabled={productQuantity <= 1 ? "disabled" : ""} icon={<MinusCircleOutlined className="incrementer--decrease" onClick={() => setProductQuantity(productQuantity - 1)} />} />
                <span>{productQuantity}</span>
                <Button icon={<PlusCircleOutlined className="incrementer--increase" onClick={() => setProductQuantity(productQuantity + 1)} />} />
            </div>
            <div className="addcart--button">
                <button onClick={addToCart}>{`Thêm vào giỏ ( ${(productQuantity * price).toLocaleString()}đ )`}</button>
            </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ProductDetail;
