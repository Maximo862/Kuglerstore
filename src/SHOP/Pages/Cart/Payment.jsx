import { useNavigate } from "react-router-dom";
import { ProgressTracker } from "./ProgressCart";
import { useContext } from "react";
import { Cartcontext } from "./Cartcontext";

export function Payment() {

const navigate = useNavigate()
const { Handleformnavigate } = useContext(Cartcontext)
  return (
    <>
      <ProgressTracker />
      <h2 className="mb-4">Payment Method</h2>

      <form noValidate onSubmit={((e) => Handleformnavigate(e,navigate,"/Direction/Payment/Checkout"))}>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">
            Select your payment method
          </label>
          <select className="form-select" id="paymentMethod" required defaultValue="creditCard">
            <option value="" disabled>Choose...</option>
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="**** **** **** 4242"
            required
          />
        </div>

        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-lock-fill me-2"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8V6a5.5 5.5 0 1 1 11 0v2H14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h.5zM4 6a4 4 0 1 1 8 0v2H4V6z" />
          </svg>
          <div>Secure payment with SSL encryption</div>
        </div>
        <div className="container-fluid text-end">
        <button className="checkout-button" type="submit">Confirm Purchase</button>
        </div>
      </form>
    </>
  );
}
