import { Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Restaurants from "./Pages/Restaurants";
import Order from "./Pages/Order";
import FriedChicken from "./Components/FriedChicken";
import HotDeal from "./Components/HotDeal";
import NewProduct from "./Pages/NewProduct";
import ComboForOne from "./Pages/ComboForOne";
import ComboSharing from "./Pages/ComboSharing";
import BurgerRicePasta from "./Pages/BurgerRicePasta";
import Snack from "./Pages/Snack";
import DesserDrink from "./Pages/DessertDrink";

function App() {
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


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<Order />}>
          <Route path="" element={<HotDeal data={data} />}/>
          <Route path="new-product" element={<NewProduct data={data}/>}/>
          <Route path="combo-for-one" element={<ComboForOne data={data}/>}/>
          <Route path="combo-sharing" element={<ComboSharing data={data}/>}/>
          <Route path="fried-rosted-chicken" element={<FriedChicken data={data} />}/>
          <Route path="burger-rice-pasta" element={<BurgerRicePasta data={data} />}/>
          <Route path="snack" element={<Snack data={data} />}/>
          <Route path="dessert-drink" element={<DesserDrink data={data} />}/>
        </Route>
        <Route path="/he-thong-nha-hang-kfc" element={<Restaurants />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
