import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import ProductsPage from "./components/ProductsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

function App() {
    return (
        <div className="app-container">
          <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products-page" element={<ProductsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;