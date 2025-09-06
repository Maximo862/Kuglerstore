import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../Pages/Cart/Cartcontext";
import { FilterContext } from "../Context/Shopcontext";
import { motion } from "framer-motion";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Relatedproducts } from "../Components/Relatedproducts";
import { Stars } from "../Components/Stars";

export const Productdetails = ({ products }) => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const { Onclickfav, fav } = useContext(FilterContext);
  const { Addtocart } = useContext(Cartcontext);

  useEffect(() => {
    const found = products.find((p) => p.id == parseInt(id));
    setproduct(found);
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <motion.div
        className="details_container d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center my-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="text-center text-md-start">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-success">${product.price}</h4>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
          <div className="d-flex justify-content-center">
            <Stars rating={product.rating} />
          </div>
          <p className="text-success mt-3">
            <TbTruckDelivery /> Free shipping nationwide
          </p>
          <p className="text-secondary">
            <FaBoxOpen /> 30-day return policy
          </p>

          <div className="d-flex gap-3 mt-3 flex-wrap justify-content-center justify-content-md-start">
            <button
              className="btn btn-primary"
              onClick={() => Addtocart(product)}
            >
              Add to cart
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => Onclickfav(product)}
            >
              Add to favorites:{" "}
              {fav.some((pro) => pro.id == product.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      <Relatedproducts products={products} product={product} />
    </>
  );
};
