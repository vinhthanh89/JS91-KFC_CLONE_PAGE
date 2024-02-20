import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import "./style.css";
import Notification from "../Notification/Notification";


const ProductCard = ({ props , handleAddProductCart }) => {
  const { image, title, description, price, kind , id } = props;
  const productLocal = {
    image : image,
    title : title,
    description : description,
    price : price,
    quantity : 1,
    id : id,
  }
  
  const handleAddProduct = () => {
    handleAddProductCart(productLocal);
  }

  const navigative = useNavigate()

  const handleClick = () => {
    navigative(`/order/${kind}/${id}`) 
    scroll.scrollToTop();
  };

  const addToCart = () => {
    setShowNotification(true);
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
    setProductQuantity(1);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  return (
    <div className="productcard-container">
      {showNotification && (
        <Notification
          message={`0${productQuantity} x ${title} đã được thêm vào giỏ hàng`}
        />
      )}
      <div className="productcard__image">
        <div onClick={handleClick} className="productcard__image-container">
          <img src={`${image}`} alt="" />
        </div>
      </div>
      <div className="productcard__info">
        <div className="productcard__info-container">
          <div className="productcard__info--title">
            <div onClick={handleClick}  className="info--title">
              <Link to={`hot-deal/${id}`}>
                <span>{title}</span>
              </Link>
            </div>
            <div className="info--price">
              <span>{price.toLocaleString()}đ</span>
            </div>
          </div>
          <div className="productcard__info--des">
            <div className="info--des">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleClick} className="button edit-button">Tùy Chỉnh</button>

          <button onClick={handleAddProduct} className="button add-button">Thêm</button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
