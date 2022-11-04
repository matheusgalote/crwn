import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Auth from "./routes/auth";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import ShopCategorie from "./components/shop-categorie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
