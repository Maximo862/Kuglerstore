import { useContext } from "react";
import { Cartcontext } from "./Cartcontext";
import { ProgressTracker } from "./ProgressCart";
import { Purchaseboton } from "../../Components/Purchaseboton";

export function Checkout() {
  const { cart, pricecart } = useContext(Cartcontext);

  return (
    <div>
      <ProgressTracker />
      <h2>Product list</h2>
      <div>
        <table
          style={{ marginTop: "100px" }}
          className="table table-dark table-hover"
        >
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Products</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) => {
              return (
                <tr key={p.id}>
                  <th scope="row">{p.id}</th>
                  <td>{p.title}</td>
                  <td>{p.category}</td>
                  <td>{p.quantity}</td>
                  <td>{p.price}$</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3 className="price text-center">Price: {pricecart.toFixed(2)}$</h3>
      <Purchaseboton />
    </div>
  );
}
