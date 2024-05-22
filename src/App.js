import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./app.css";
import Navigation from "./navigation";
import Home from "./page/home";
import Footer from "./component/footer";
import SearchProduct from "./page/search_product";
import Product from "./page/product";
import About from "./page/about";
import Signup from "./page/sign_up";
import Sign_in from "./page/sign_In";
import { The_Context } from "./data/Context";
import { useContext } from "react";
import Order from "./page/orders";
import AddProduct from "./page/add_product";

export default function App() {
  const { access_token, setAccess_token } = useContext(The_Context);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setAccess_token(localStorage.getItem("access_token"));
    }
  }, []);

  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/all_product" element={<SearchProduct />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/add_product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}
