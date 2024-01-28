import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import "./style.css";

const HomePageSuggestion = () => {
  const { Meta } = Card;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65b5f10fda3a3c16ab000d0d.mockapi.io/combocaterogy"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderSuggestionCards = data.map((category) => {
    return (
      <div className="category item" key={category.id}>
        <Card cover={<img alt="example" src={`${category.image}`} />}>
          <Meta
            title={`${category.title}  >`}
            description={`${category.description}`}
          />
          <div className="button-container">
            <button className="button edit-button">Tùy Chỉnh</button>
            <button className="button add-button">Thêm</button>
          </div>
        </Card>
      </div>
    );
  });

  return (
    <div className="suggestion-container">
      <div className="category-title">
        <span>CÓ THỂ BẠN SẼ THÍCH</span>
      </div>
      <div className="suggestio__card-container">{renderSuggestionCards}</div>
    </div>
  );
};

export default HomePageSuggestion;
