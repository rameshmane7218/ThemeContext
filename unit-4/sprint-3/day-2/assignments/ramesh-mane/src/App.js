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
import Beauty from "./pages/Beauty";
import Electronics from "./pages/Electronics";
import MensShoes from "./pages/MensShoes";
import WomensShoes from "./pages/WomensShoes";
import KidsShoes from "./pages/KidsShoes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/mens_clothing" element={<MensClothes />} />
          <Route path="/womens_clothing" element={<WomensClothes />} />
          <Route path="/kids_clothing" element={<KidsClothes />} />
          <Route path="/mens_shoes" element={<MensShoes />} />
          <Route path="/womens_shoes" element={<WomensShoes />} />
          <Route path="/kids_shoes" element={<KidsShoes />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/electronics" element={<Electronics />} />
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
