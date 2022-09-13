import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Auth from "./routes/auth/auth";

import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
