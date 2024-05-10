import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navigation from "./navigation";
import Home from "./page/home";
import Footer from "./component/footer";
import SearchProduct from "./page/search_product";
import Product from "./page/product";
import About from "./page/about";

export default function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_product" element={<SearchProduct />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
