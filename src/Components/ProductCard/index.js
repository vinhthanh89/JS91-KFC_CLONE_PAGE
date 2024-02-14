import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { animateScroll as scroll } from 'react-scroll';
>>>>>>> 59215ee00cfdfc0faa05b44d1a7b69cf96841b51
import "./style.css";
import Notification from "../Notification/Notification";


const ProductCard = ({ props }) => {
  const [productQuantity , setProductQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const { image, title, description, price, kind , id } = props;
<<<<<<< HEAD
  const navigative = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, [id]);

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
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
=======
  const navigative = useNavigate()
  const handleClick = () => {
    navigative(`/order/${kind}/${id}`) 
    scroll.scrollToTop();
>>>>>>> 59215ee00cfdfc0faa05b44d1a7b69cf96841b51
  };

  return (
    <div className="productcard-container">
      {showNotification && (
        <Notification
          message={`${productQuantity} ${title} đã được thêm vào giỏ hàng`}
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
<<<<<<< HEAD
          <button onClick={() => navigative(`/order/${kind}/${id}`)} className="button edit-button">Tùy Chỉnh</button>
          <button onClick={addToCart}  className="button add-button">Thêm</button>
=======
          <button onClick={handleClick} className="button edit-button">Tùy Chỉnh</button>
          <button className="button add-button">Thêm</button>
>>>>>>> 59215ee00cfdfc0faa05b44d1a7b69cf96841b51
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
