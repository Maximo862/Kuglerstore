import { useContext } from "react";
import { Cartcontext } from "../Pages/Cart/Cartcontext";
import { Link } from "react-router-dom";
import { FilterContext } from "../Context/Shopcontext";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Stars } from "./Stars";
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

export function Productcard({
  producto,
  id,
  title,
  img,
  category,
  price,
  stock,
  rating,
  quantity,
  showquantity,
  showaddtocart,
  showviewmoredetails,
  showremovefromcart,
}) {
  const { Addtocart, Removefromcart, handleQuantity } = useContext(Cartcontext);
  const { Onclickfav, Handlemessage, fav } = useContext(FilterContext);

  return (
    <div className={"box"}>
      <img src={img} alt={title} />
      <div className={"boxinterface"}>
        <strong>Name: {title}</strong>
        <br />
        <strong>Category: {category}</strong> <br />
        <strong>Price: {price}$</strong> <br />
        <strong>Stock: {stock}</strong> <br />
          {showquantity && (
          <strong>Quantity: <CiCircleMinus onClick={() => handleQuantity(id, quantity > 1 ? quantity - 1 : 1)} className="cart-minus"/> {quantity} <CiCirclePlus  onClick={() => handleQuantity(id, quantity + 1)} className="cart-more"/><br /></strong>
          )} 
        <strong>
          Rating: {rating}
          {<Stars rating={rating} />}
        </strong>{" "}
        <br />
      </div>
      <div className="product-butons">
        {showaddtocart && (
          <button
            className="buton-animation"
            onClick={() => {
              Addtocart(producto);
              Handlemessage(id);
            }}
          >
            <span>Add to cart</span>
          </button>
        )}
        <br />
        <button
          className="buton-animation"
          onClick={() => Onclickfav(producto)}
        >
          <span>
            Favorites:{" "}
            {fav.some((pro) => pro.id == id) ? <FaHeart /> : <FaRegHeart />}
          </span>
        </button>
        <br />
        {showviewmoredetails && (
          <Link to={`/Productdetails/${id}`}>
            <button className="buton-animation">
              <span>View more details</span>
            </button>
          </Link>
        )}
        <br />
        {showremovefromcart && (
          <button
            className="buton-animation"
            onClick={() => Removefromcart(producto)}
          >
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
