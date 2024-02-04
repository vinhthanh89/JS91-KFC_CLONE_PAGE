import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const ProductCard = ({ props }) => {
  const { image, title, description, price,kind , id } = props;
  const navigative = useNavigate()

  return (
    <div className="productcard-container">
      <div className="productcard__image">
        <div onClick={() => navigative(`${id}`)} className="productcard__image-container">
          <img src={`${image}`} alt="" />
        </div>
      </div>
      <div className="productcard__info">
        <div className="productcard__info-container">
          <div className="productcard__info--title">
            <div onClick={() => navigative(`/${id}`)}  className="info--title">
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
          <button className="button edit-button">Tùy Chỉnh</button>
          <button className="button add-button">Thêm</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
