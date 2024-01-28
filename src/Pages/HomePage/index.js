import "./style.css";
import HomePageCategory from "../../Components/HomePageCategory";
import HomePageSuggestion from "../../Components/HomePageSuggestion";
import SlickSlider from "../../Components/SlickSlider";

const HomePage = () => {
  return (
    <main>
      <SlickSlider />
      <HomePageCategory />
      <HomePageSuggestion />
    </main>
  );
};

export default HomePage;
