import "./style.css";
import HomePageCategory from "../../Components/HomePageCategory";
import HomePageSuggestion from "../../Components/HomePageSuggestion";
import SlickSlider from "../../Components/SlickSlider";

const HomePage = ({data , orderData ,handleAddProductCart}) => {
  return (
    <main>
      <SlickSlider />
      <HomePageCategory orderData={orderData} />
      <HomePageSuggestion handleAddProductCart={handleAddProductCart} data={data} />
    </main>
  );
};

export default HomePage;
