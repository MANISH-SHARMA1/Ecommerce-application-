import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Payment from "./components/payments/Payment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/payments/:status" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
