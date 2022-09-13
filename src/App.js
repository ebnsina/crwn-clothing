import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Auth from "./routes/auth/auth";
import Checkout from "./routes/checkout/checkout";

import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";

function App() {
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
}

export default App;
