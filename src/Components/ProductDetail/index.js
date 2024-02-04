import {PlusCircleOutlined , MinusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const ProductDetail = ({data}) => {
  const [productQuantity , setProductQuantity] = useState(1);
  const urlParam  = useParams();
    const foundObject = (data.find((item) => item.id === urlParam.productId) || []);
    const {image , title , description , price } = foundObject;

  return (
    <div className="productdetail-container">
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
                <button>{`Thêm vào giỏ ( ${(productQuantity * price).toLocaleString()}đ )`}</button>
            </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ProductDetail;
