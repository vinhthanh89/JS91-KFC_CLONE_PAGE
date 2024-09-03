/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./App.css";
import AboutYummy from "./Components/AboutYummy";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OrderOutlet from "./Components/OrderOutlet";
import OurHistory from "./Components/OurHistory";
import OurStory from "./Components/OurStory";
import ProductDetail from "./Components/ProductDetail";
import { setFoodDataSlice } from "./features/foodData/foodDataSlice";
import { setOrderDataSlice } from "./features/orderData/orderDataSlice";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/HomePage";
import InfomationPolicy from "./Pages/InfomationPolicy";
import LoginPage from "./Pages/LoginPage";
import Order from "./Pages/Order";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Restaurants from "./Pages/Restaurants";
import SignUp from "./Pages/SignUp";
import TermsCondition from "./Pages/TermsCondition";
import TestCart from "./Pages/TestCart";

function App() {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          "https://65b5f10fda3a3c16ab000d0d.mockapi.io/HomePage-food-category"
        );
        setOrderData(response.data);
        dispatch(setOrderDataSlice(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOrderData();
  }, [dispatch]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          "https://65b5f10fda3a3c16ab000d0d.mockapi.io/combocaterogy"
        );
        dispatch(setFoodDataSlice(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFoodData();
  }, [dispatch]);

  const orderRoutes = orderData.map((category) => {
    return (
      <React.Fragment key={category.id}>
        <Route
          path={category.navigative}
          element={<OrderOutlet category={category} />}
        />
        <Route
          path={`${category.navigative}/:productId`}
          element={<ProductDetail />}
        />
      </React.Fragment>
    );
  });

  return (
    <div className="App">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/JS91-KFC_CLONE_PAGE" element={<HomePage />} />
        <Route path="JS91-KFC_CLONE_PAGE/order" element={<Order />}>
          {orderRoutes}
        </Route>
        <Route
          path="JS91-KFC_CLONE_PAGE/he-thong-nha-hang-kfc"
          element={<Restaurants />}
        />
        <Route
          path="JS91-KFC_CLONE_PAGE/infomation-policy"
          element={<InfomationPolicy />}
        />
        <Route
          path="JS91-KFC_CLONE_PAGE/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="JS91-KFC_CLONE_PAGE/terms-condition"
          element={<TermsCondition />}
        />
        <Route path="JS91-KFC_CLONE_PAGE/kfctabs" element={<AboutUs />}>
          <Route path="about-yummy" element={<AboutYummy />} />
          <Route path="our-history" element={<OurHistory />} />
          <Route path="our-story" element={<OurStory />} />
        </Route>
        <Route />
        <Route path="JS91-KFC_CLONE_PAGE/login" element={<LoginPage />} />
        <Route path="JS91-KFC_CLONE_PAGE/sign-up" element={<SignUp />} />
        <Route path="JS91-KFC_CLONE_PAGE/contact-us" element={<ContactUs />} />
        <Route path="JS91-KFC_CLONE_PAGE/cart" element={<TestCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
