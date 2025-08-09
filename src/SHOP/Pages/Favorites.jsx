import { useContext } from "react";
import { FilterContext } from "../Context/Shopcontext.jsx";
import { Productcard } from "../Components/Productcard.jsx";

export function Favorites() {
  const { fav } = useContext(FilterContext);

  return (
    <div>
      <h2 className="my-5">Favorites:</h2>
      {Array.isArray(fav) && fav.length > 0 ? (
        <ul className={"boxes"}>
          {fav.map((p) => (
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
              showaddtocart={true}
              showviewmoredetails={true}
              showremovefromcart={false}
            />
          ))}
        </ul>
      ) : (
        <div className="warning-container my-5">
          <h2 className="warning">No favorites yet..</h2>
        </div>
      )}
    </div>
  );
}
