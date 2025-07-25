import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";


// Pages
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  PaymentSuccess, // 👈 NUEVO
} from "./pages";

import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

// 👇 Componente que inicializa el usuario logueado desde localStorage
const InitApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: storedUser });
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment-success" element={<PaymentSuccess />} /> {/* ✅ NUEVO */}
      <Route path="/product/*" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <InitApp />
        <Toaster />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);
