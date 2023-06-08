import Products from "./components/Products";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
