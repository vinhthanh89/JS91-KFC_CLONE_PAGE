import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cartData/cartDataSlice";

const ProductCard = ({ props}) => {
  const dispatch = useDispatch();
  const { image, title, description, price, kind, id } = props;
  const productLocal = {
    image: image,
    title: title,
    description: description,
    price: price,
    quantity: 1,
    id: id,
  };

  const navigative = useNavigate();

  const handleClick = () => {
    navigative(`/JS91-KFC_CLONE_PAGE/order/${kind}/${id}`);
    scroll.scrollToTop();
  };

  return (
    <div className="productcard-container">
      <div className="productcard__image">
        <div onClick={handleClick} className="productcard__image-container">
          <img src={`${image}`} alt="" />
        </div>
      </div>
      <div className="productcard__info">
        <div className="productcard__info-container">
          <div className="productcard__info--title">
            <div onClick={handleClick} className="info--title">
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
          <button onClick={handleClick} className="button edit-button">
            Tùy Chỉnh
          </button>

          <button
            onClick={() => dispatch(addProduct(productLocal))}
            className="button add-button"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
