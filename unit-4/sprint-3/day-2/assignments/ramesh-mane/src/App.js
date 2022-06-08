import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import MensClothes from "./pages/MensClothes";
import WomensClothes from "./pages/WomensClothes";
import KidsClothes from "./pages/KidsClothes";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import MensShoes from "./pages/MensShoes";
import WomensShoes from "./pages/WomensShoes";
import KidsShoes from "./pages/KidsShoes";
import { useState } from "react";
import Layout from "./components/Layout";
import Product from "./pages/Product";
function App() {
  const [pageNotFound, setPageNotFound] = useState(true);
  
  return (
    <div className="App">
      <Navbar /> 
      <section style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/mens_clothing" element={<MensClothes />} />
          <Route path="/mens_clothing/:id" element={<Product />} />

          <Route path="/womens_clothing" element={<WomensClothes />} />
          <Route path="/womens_clothing/:id" element={<Product />} />

          <Route path="/kids_clothing" element={<KidsClothes />} />
          <Route path="/kids_clothing/:id" element={<Product />} />

          <Route path="/mens_shoes" element={<MensShoes />} />
          <Route path="/mens_shoes/:id" element={<Product />} />

          <Route path="/womens_shoes" element={<WomensShoes />} />
          <Route path="/womens_shoes/:id" element={<Product />} />

          <Route path="/kids_shoes" element={<KidsShoes />} />
          <Route path="/kids_shoes/:id" element={<Product />} />

          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/jewelery/:id" element={<Product />} />

          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:id" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </section>
      

      <Footer />
    </div>
  );
}

export default App;
