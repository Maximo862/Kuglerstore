import { useState } from "react";
import { products } from "./SHOP/Data/Products.json";
import { Shop } from "./SHOP/Pages/Shop.jsx";
import { Header } from "./SHOP/Components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { CartItem } from "./SHOP/Pages/Cart/Cart.jsx";
import { Productdetails } from "./SHOP/Pages/Productdetails.jsx";
import { Favorites } from "./SHOP/Pages/Favorites.jsx";
import { Direction } from "./SHOP/Pages/Cart/Direction.jsx";
import { Payment } from "./SHOP/Pages/Cart/Payment.jsx";
import { Checkout } from "./SHOP/Pages/Cart/Checkout.jsx";
import { Footer } from "./SHOP/Components/Footer.jsx";
import { Home } from "./SHOP/Pages/Home.jsx";
import Protectedroutes from "./SHOP/Protectedroutes.jsx";
import { Register } from "./SHOP/Pages/Register.jsx";
import { Login } from "./SHOP/Pages/Login.jsx";


function useCustom() {
  const [filters, setfilters] = useState({
    category: "all",
    minPrice: 0,
    name: "",
    sort: "default",
  });

  function Filter(products) {
    const Forcategoryandprice = products.filter(
      (p) =>
        p.price > filters.minPrice &&
        (filters.category === "all" || p.category === filters.category)
    );

    const Forname = Forcategoryandprice.filter((p) =>
      p.title.toLowerCase().includes(filters.name)
    );

    const Order = [...Forname];
    if (filters.sort === "asc") Order.sort((a, b) => a.price - b.price);
    if (filters.sort === "desc") Order.sort((a, b) => b.price - a.price);

    return Order;
  }

  return { Filter, setfilters };
}

function App() {
  const { Filter, setfilters } = useCustom();

  const Filterproducts = Filter(products);

  return (
    <>
      <Header filtrador={setfilters} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<Protectedroutes/>}>
        <Route
          path="/Shop"
          element={<Shop change={setfilters} products={Filterproducts} />}
        />
        <Route path="/Cart" element={<CartItem />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route
          path="/Productdetails/:id"
          element={<Productdetails products={products} />}
        />
        <Route path="/Direction" element={<Direction />} />
        <Route path="/Direction/Payment" element={<Payment />} />
        <Route path="/Direction/Payment/Checkout" element={<Checkout />} />
      </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

