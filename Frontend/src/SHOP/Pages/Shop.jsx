import { useContext, useState } from "react";
import { FilterContext } from "../Context/Shopcontext";
import { Filters } from "../Components/Filters";
import { Imgsmain } from "../Components/Imgsmain";
import { Carousel } from "../Components/Carousel";
import { Productcard } from "../Components/Productcard";
import { Categoryfilter } from "../Components/Categoryfilter";
import { Authcontext } from "../Context/Authcontext";
import { PiHandWavingBold } from "react-icons/pi";

export function Shop({ products, change }) {
  const { message, Mesagge } = useContext(FilterContext);
  const [categoryactive, setcategoryactive] = useState("All");
  const {user} = useContext(Authcontext)

  const Typesofcategorys = [
    "beauty",
    "fragrances",
    "laptops",
    "womens-jewellery",
    "mobile-accessories",
  ];

  const productsshow =
    categoryactive === "All"
      ? products
      : products.filter((p) => p.category == categoryactive);

  return (
    <>
    <h2 className="d-flex justify-content-center m-5">Nice to see you again, {user} <PiHandWavingBold/></h2>
      <Carousel />
      <Imgsmain />
      <Filters change={change} />
      <main className={"productos"}>
        {message && <Mesagge />}
        <Categoryfilter
          categoryactive={categoryactive}
          setcategoryactive={setcategoryactive}
          Typesofcategorys={Typesofcategorys}
        />
        <div className={"products_container"}>
          <ul className={"boxes"}>
            {productsshow.map((p) => {
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
                  // showquantity={false}
                  showaddtocart={true}
                  showviewmoredetails={true}
                  showremovefromcart={false}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
