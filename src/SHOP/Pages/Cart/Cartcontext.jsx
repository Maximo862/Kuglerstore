import { useState, createContext, useEffect } from "react";

export const Cartcontext = createContext();

export function Cartprovider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedcart = localStorage.getItem("cart")
    return savedcart ? JSON.parse(savedcart) : [];
  })

  function Addtocart(productadded) {
    setCart([...cart, productadded]);

    const exists = cart.find((p) => p.id == productadded.id);

    if (exists) {
      const updated = cart.map((p) =>
        p.id == productadded.id ? { ...p, quantity: p.quantity + 1 } : p
      );

      setCart(updated);
    } else {
      setCart([...cart, { ...productadded, quantity: 1 }]);
    }
  }

  function Removefromcart(removedproduct) {
    const newcart = cart.filter((p) => p.id !== removedproduct.id);
    setCart(newcart);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const numberofproducts = cart.reduce((ac, p) => ac + p.quantity, 0);

  function Handleformnavigate(e, navigate, rute) {
    e.preventDefault();
    navigate(rute);
  }

  const [pricecart, setpricecart] = useState(0);
  const [buttoncontinue, setbuttoncontinue] = useState(false);

  useEffect(() => {
    const totalprice = cart.reduce((ac, p) => ac + p.price * p.quantity, 0);
    setpricecart(totalprice);
    setbuttoncontinue(cart.length > 0);
  }, [cart]);

  function Clearcart() {
    setCart([]);
  }

  return (
    <Cartcontext.Provider
      value={{
        Addtocart,
        Removefromcart,
        cart,
        numberofproducts,
        Handleformnavigate,
        pricecart,
        buttoncontinue,
        Clearcart,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}
