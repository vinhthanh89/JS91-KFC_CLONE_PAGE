import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Restaurants from "./Pages/Restaurants";
import Order from "./Pages/Order";
import NewProduct from "./Pages/NewProduct";
import ComboForOne from "./Pages/ComboForOne";
import ComboSharing from "./Pages/ComboSharing";
import BurgerRicePasta from "./Pages/BurgerRicePasta";
import Snack from "./Pages/Snack";
import DesserDrink from "./Pages/DessertDrink";
import HotDeal from "./Pages/HotDeal";
import FriedChicken from "./Pages/FriedChicken";
import ProductDetail from "./Components/ProductDetail";
import LogPage from "./Pages/login-logout/LogPage";
import CartPage from "./Pages/Cart/CartPage";


function App() {
  const [orderData, setOrderData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          "https://65b5f10fda3a3c16ab000d0d.mockapi.io/HomePage-food-category"
        );
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOrderData();
  }, []);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          "https://65b5f10fda3a3c16ab000d0d.mockapi.io/combocaterogy"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFoodData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage data={data} orderData={orderData} />}
        />
        <Route path="/order" element={<Order />}>
          <Route path="hot-deal" element={<HotDeal data={data} />} />
          <Route
            path="hot-deal/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="new-product" element={<NewProduct data={data} />} />
          <Route
            path="new-product/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="combo-for-one" element={<ComboForOne data={data} />} />
          <Route
            path="combo-for-one/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="combo-sharing" element={<ComboSharing data={data} />} />
          <Route
            path="combo-sharing/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="fried-chicken" element={<FriedChicken data={data} />} />
          <Route
            path="fried-chicken/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route
            path="burger-rice-pasta"
            element={<BurgerRicePasta data={data} />}
          />
          <Route
            path="burger-rice-pasta/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="snack" element={<Snack data={data} />} />
          <Route
            path="snack/:productId"
            element={<ProductDetail data={data} />}
          />
          <Route path="dessert-drink" element={<DesserDrink data={data} />} />
          <Route
            path="dessert-drink/:productId"
            element={<ProductDetail data={data} />}
          />
        </Route>
        <Route path="/he-thong-nha-hang-kfc" element={<Restaurants />} />
        <Route path="/dangnhap" element={<LogPage />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
      <Footer orderData={orderData} />
    </div>
  );
}

export default App;
