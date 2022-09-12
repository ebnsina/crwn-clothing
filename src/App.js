import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
