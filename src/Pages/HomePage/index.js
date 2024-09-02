import HomePageCategory from "../../Components/HomePageCategory";
import HomePageSuggestion from "../../Components/HomePageSuggestion";
import SlickSlider from "../../Components/SlickSlider";
import "./style.css";

const HomePage = ({handleAddProductCart }) => {
  return (
    <main>
      <SlickSlider />
      <HomePageCategory />
      <HomePageSuggestion
        handleAddProductCart={handleAddProductCart}
      />
    </main>
  );
};

export default HomePage;
