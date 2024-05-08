// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import ProductDetail from "./pages/ProductDetail";
import Navigation from "./components/Navigation";

import { products } from "./constant";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";

function App() {
  // Initialize cart state from local storage or empty array if not found
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
        <header>
          <Navigation cartCount={cart.length} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductLists addToCart={addToCart} products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={
              <CheckOut cartItems={cart} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
