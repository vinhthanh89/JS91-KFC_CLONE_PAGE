import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Restaurants from "./Pages/Restaurants";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/he-thong-nha-hang-kfc" element={<Restaurants />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
