import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import ShopList from "./ShopList";
import Home from "./Home";
import MenuCart from "./MenuCart";
import Payment from "./Payment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/product" element={<ShopList />}></Route>
          <Route path="/shopping_cart" element={<MenuCart />}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
