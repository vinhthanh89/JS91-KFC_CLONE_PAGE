import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";

import "./style.css"

const HomePageCategory = () => {
    const { Meta } = Card;
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://65b5f10fda3a3c16ab000d0d.mockapi.io/HomePage-food-category"
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    const renderCategoryCard = data.map((category) => {
      return (
        <div className="category item" key={category.id}>
          <Card
            cover={<img alt="example" src={`${category.image}`} />}
          >
            <Meta title={`${category.title} >`} />
          </Card>
        </div>
      );
    });
  
    return (
      <div className="foodcategory-container">
        <div className="category-title">
          <span>DANH MỤC MÓN ĂN</span>
        </div>
        <div className="foodcategory__card-container">{renderCategoryCard}</div>
      </div>
    );
  };
  
  export default HomePageCategory;