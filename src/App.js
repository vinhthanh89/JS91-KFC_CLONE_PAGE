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
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import AboutYummy from "./Components/AboutYummy"
import OurHistory from "./Components/OurHistory"
import OurStory from "./Components/OurStory"
import InfomationPolicy from "./Pages/InfomationPolicy"
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import TestCart from "./Pages/TestCart"


function App() {
  const [orderData, setOrderData] = useState([]);
  const [data, setData] = useState([]);
  const [cartLocalData, setCartLocalData] = useState(
    JSON.parse(localStorage.getItem("dataCart")) || []
  );

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

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cartLocalData));
  }, [cartLocalData]);

  const handleAddProductCart = (productCart) => {
    const item = cartLocalData.find((item) => item.id === productCart.id);
    if (!item) {
      setCartLocalData([...cartLocalData, productCart]);
    } else {
      item.quantity += productCart.quantity;
    }
  };

  const handleDeleteProductCart = (productId) => {
    setCartLocalData((prev) =>
      prev.filter((productItem) => productItem.id !== productId)
    );
  };

  const handleIncreProductQuantity = (productId) => {
    setCartLocalData((prev) =>
      prev.map((productItem) =>
        productItem.id === productId
          ? { ...productItem, quantity: productItem.quantity + 1 }
          : productItem
      )
    );
  };

  const handleDecreProductQuantity = (productId) => {
    setCartLocalData((prev) =>
      prev.map((productItem) =>
        productItem.id === productId
          ? { ...productItem, quantity: productItem.quantity - 1 }
          : productItem
      )
    );
  };

  return (
    <div className="App">
      <Header cartLocalData={cartLocalData} />
      <Routes>
        <Route
          path="/test"
          element={
            <TestCart
              cartLocalData={cartLocalData}
              handleDeleteProductCart={handleDeleteProductCart}
              handleIncreProductQuantity={handleIncreProductQuantity}
              handleDecreProductQuantity={handleDecreProductQuantity}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleAddProductCart={handleAddProductCart}
              data={data}
              orderData={orderData}

            />
          }
        />
        <Route path="/order" element={<Order />}>
          <Route
            path="hot-deal"
            element={
              <HotDeal
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="hot-deal/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="new-product"
            element={
              <NewProduct
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="new-product/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="combo-for-one"
            element={
              <ComboForOne
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="combo-for-one/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="combo-sharing"
            element={
              <ComboSharing
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="combo-sharing/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="fried-chicken"
            element={
              <FriedChicken
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="fried-chicken/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="burger-rice-pasta"
            element={
              <BurgerRicePasta
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="burger-rice-pasta/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="snack"
            element={
              <Snack handleAddProductCart={handleAddProductCart} data={data} />
            }
          />
          <Route
            path="snack/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="dessert-drink"
            element={
              <DesserDrink
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
          <Route
            path="dessert-drink/:productId"
            element={
              <ProductDetail
                handleAddProductCart={handleAddProductCart}
                data={data}
              />
            }
          />
        </Route>
        <Route path="/he-thong-nha-hang-kfc" element={<Restaurants />} />
        <Route path="/infomation-policy" element={<InfomationPolicy />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-condition" element={<TermsCondition />}/>
        <Route path="/kfctabs" element={<AboutUs />}>

          <Route path="about-yummy" element={<AboutYummy />}/>
          <Route path="our-history" element={<OurHistory />}/>
          <Route path="our-story" element={<OurStory />}/>

        </Route>
        <Route />
        <Route path="/dangnhap" element={<LogPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
      <Footer orderData={orderData} />
    </div>
  );
}

export default App;
