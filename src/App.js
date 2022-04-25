import { Route, Routes } from "react-router-dom";
import Auth from "./routes/auth/auth";
import Checkout from "./routes/checkout/checkout";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route index path="shop/*" element={<Shop />} />
        <Route index path="checkout" element={<Checkout />} />
        <Route index path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
