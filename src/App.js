import clsx from "clsx";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import AboutUs from "./pages/about-us/AboutUs";
import Testimonial from "./pages/testimonial/Testimonial";

const App = () => {
  return (
    <div className={clsx(styles.container, styles.fontHellixTitle)}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/testimonial" exact element={<Testimonial />} />
      </Routes>
    </div>
  );
};

export default App;
