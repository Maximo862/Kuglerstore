import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Cartcontext } from "../Pages/Cart/Cartcontext";

export function Purchaseboton() {
  const [finished, setfinished] = useState(false);
  const { Clearcart } = useContext(Cartcontext);
  const navigate = useNavigate();

  function Checkout() {
    setfinished(true);

    setTimeout(() => {
      navigate("/");
      Clearcart();
    }, 2000);
  }
  return (
    <div className="text-end m-5">
      <p>The purchase is incomplete</p>
      <button onClick={() => Checkout()}>Finish Purchase</button>
      {finished && (
        <div className="alert alert-success text-center mt-3" role="alert">
          ¡Purchase made successfully!
          <FaCheckSquare size={30} color="#14aa06ff" />
        </div>
      )}
    </div>
  );
}
