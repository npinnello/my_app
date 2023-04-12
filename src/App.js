import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./shop-context";
import { Checkout } from "./pages/checkout/checkout";
//import { Checkout } from "./pages/checkout/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element ={<Checkout />} />
             {/* <Route path="/checkout" element={<Checkout />} />  */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;