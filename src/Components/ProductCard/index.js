import { Link } from "react-router-dom";

import "./style.css";

const ProductCard = ({props}) => {
    const {image , title , description , price } = props
  return (
    <div className="productcard-container">
      <div className="productcard__image">
        <div className="productcard__image-container">

            <img
              src={`${image}`}
              alt=""
            />

        </div>
      </div>
      <div className="productcard__info">
        <div className="productcard__info-container">
          <div className="productcard__info--title">
            <div className="info--title">
              <Link>
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
          <div className="button-container">
            <button className="button edit-button">Tùy Chỉnh</button>
            <button className="button add-button">Thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
