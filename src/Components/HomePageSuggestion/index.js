import axios from "axios";
import { useEffect, useState } from "react";

import "./style.css";
import ProductCard from "../ProductCard";

const HomePageSuggestion = () => {
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

  const suggestionMenu = data.filter(item => item.kind === "combo sharing")

  const renderSuggestionCards = suggestionMenu.map((category) => {
    return(
      <div className="productcard-item" key={category.id}>
        <ProductCard props={category} />
      </div>
    )
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
