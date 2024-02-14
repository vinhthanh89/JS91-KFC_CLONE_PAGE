import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./style.css";

const ProductCartItem = ({
  item,
  handleDeleteProductCart,
  handleIncreProductQuantity,
  handleDecreProductQuantity,
}) => {
  const { id, image, title, description, price, quantity } = item;

  return (
    <>
      <div className="productcart-item__left">
        <img src={image} alt="" />
        <div className="productcart-item--info">
          <p className="productcart-item--info-title">{title}</p>
          <p className="productcart-item--info-des">{description}</p>
          <button
            onClick={() => handleDeleteProductCart(id)}
            className="delete-button"
          >
            Xóa
          </button>
        </div>
      </div>
      <div className="productcart-item__right">
        <div className="incrementer--button">
          <Button
            onClick={() => handleDecreProductQuantity(id)}
            disabled={quantity <= 1 ? "disabled" : ""}
            icon={<MinusCircleOutlined className="incrementer--decrease" />}
          />
          <span>{quantity}</span>
          <Button
            onClick={() => handleIncreProductQuantity(id)}
            icon={<PlusCircleOutlined className="incrementer--increase" />}
          />
        </div>
        <span className="productcart-item--total">
          {(price * quantity).toLocaleString()} đ
        </span>
      </div>
    </>
  );
};

export default ProductCartItem;
