import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/cartData/cartDataSlice";
// import Notification from "../Notification/Notification";

const ProductDetail = () => {
  const foodData = useSelector((state) => state.foodData.value);
  const dispatch = useDispatch();

  const [productCounter, setProductCounter] = useState(1);

  const urlParam = useParams();
  const foundObject =
    foodData.find((item) => item.id === urlParam.productId) || [];
  const { id, image, title, description, price } = foundObject;
  const productLocal = {
    image: image,
    title: title,
    description: description,
    price: price,
    quantity: productCounter,
    id: id,
  };

  return (
    <div className="productdetail-container">
      <div className="productdetail__image">
        <img src={`${image}`} alt="" />
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
              <Button
                disabled={productCounter <= 1 ? "disabled" : ""}
                icon={
                  <MinusCircleOutlined
                    className="incrementer--decrease"
                    onClick={() => setProductCounter(productCounter - 1)}
                  />
                }
              />
              <span>{productCounter}</span>

              <Button
                icon={
                  <PlusCircleOutlined
                    className="incrementer--increase"
                    onClick={() => setProductCounter(productCounter + 1)}
                  />
                }
              />
            </div>
            <div className="addcart--button">
              <button onClick={() => dispatch(addProduct(productLocal))}>
                {`Thêm vào giỏ ( ${(
                  productCounter * price
                ).toLocaleString()}đ )`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
