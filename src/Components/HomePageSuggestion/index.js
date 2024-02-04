import "./style.css";
import ComboForOne from "../../Pages/ComboForOne";

const HomePageSuggestion = ({data}) => {

  return (
    <div className="suggestion-container">
      <div className="category-title">
        <span>CÓ THỂ BẠN SẼ THÍCH</span>
      </div>
      <div className="suggestio__card-container"><ComboForOne data={data} /></div>
    </div>
  );
};

export default HomePageSuggestion;
