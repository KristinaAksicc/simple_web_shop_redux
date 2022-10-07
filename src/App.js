import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProductsPage />}></Route>
          <Route exact path="/ShoppingCart" element={<ShoppingCart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
