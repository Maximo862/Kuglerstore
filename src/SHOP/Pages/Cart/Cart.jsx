import { useContext } from "react";
import { Cartcontext } from "./Cartcontext.jsx";
import { Link } from "react-router-dom";
import { ProgressTracker } from "./ProgressCart.jsx";
import { Productcard } from "../../Components/Productcard.jsx";

export function CartItem() {
  const { cart, pricecart, buttoncontinue } = useContext(Cartcontext);

  return (
    <main className={"main_cart"}>
      <ProgressTracker />
      <div className={"Title"}>
        <h2 style={{ fontSize: "3rem" }}>Cart: </h2>
        <h3>Items in your cart:</h3>
      </div>
      <div>
        <ul className={"boxes my-5"}>
          {cart.length > 0 ? (
            cart.map((p) => {
              return (
                <Productcard
                  key={p.id}
                  producto={p}
                  id={p.id}
                  title={p.title}
                  img={p.thumbnail}
                  category={p.category}
                  price={p.price}
                  stock={p.stock}
                  rating={p.rating}
                  quantity={p.quantity}
                  showquantity={true}
                  showaddtocart={false}
                  showviewmoredetails={false}
                  showremovefromcart={true}
                />
              );
            })
          ) : (
            <p className={"text_products mt-5"}>Your cart is empty...</p>
          )}
        </ul>
      </div>
      <div className={"Precios mb-5"}>
        <h4 className="mt-5 subtotal-dark">
          Subtotal: {pricecart.toFixed(2)} $
        </h4>
        <h3 className={"price"}>Total: {Math.round(pricecart)} $</h3>
        {buttoncontinue && <Link to={"/Direction"}>Continue</Link>}
      </div>
    </main>
  );
}
