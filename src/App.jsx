import { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";

import "./App.css"

// pages
import { Home, About, Products, ProductDetails, ArticlePage, Contact } from "./pages/index";

function App() {
  const [cartIsEmpty] = useState(false);
  return (
    <div className="App">
      {/* first step add BrowserRouter */}
      <BrowserRouter>
        <nav>
          <h1>Shirtz.Cool</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="/articles">Articles</NavLink> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/redirect" element={<Navigate to="/" />} />
          <Route
            path="/checkout"
            element={
              // if it's true gets redirected if not then it renders the next component
              cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
