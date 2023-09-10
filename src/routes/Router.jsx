import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Basket } from "../pages/Basket";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Product/>} path="/product"/>
        <Route element={<Basket/>} path="/basket"/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;