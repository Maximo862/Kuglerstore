import { useLocation } from "react-router-dom";

export function ProgressTracker() {
  const Location = useLocation();

  const currentroute = Location.pathname;

  const route1 = currentroute.includes("/Direction");
  const route2 = currentroute.includes("/Direction/Payment");
  const route3 = currentroute.includes("/Direction/Payment/Checkout");

  return (
    <div className={"tracker_container"}>
      <div className={"tracker_header"}>
        <h2 className="tracker_text">Order tracking</h2>
        <span className={"tracker_number"}>ID: 00735839080</span>
      </div>

      <div className={"divider"}></div>

      <div className={"verification_section"}>
        <h3 className="tracker_text">Verification</h3>
      </div>

      <div className={"progress_steps"}>
        <div className={`${"step"} ${"active"}`}>
          <div className={"step_number"}>1</div>
          <span className={"step_name tracker_text"}>Cart</span>
        </div>

        <div
          className={`${"step_connector"} ${route1 ? "active" : ""}`}
        ></div>
        <div className={`${"step"} ${route1 ? "active" : ""}`}>
          <div className={"step_number"}>2</div>
          <span className={"step_name tracker_text"}>Shipping</span>
        </div>

        <div
          className={`${"step_connector"} ${route2 ? "active" : ""}`}
        ></div>
        <div className={`${"step"} ${route2 ? "active" : ""}`}>
          <div className={"step_number"}>3</div>
          <span className={"step_name tracker_text"}>Payment</span>
        </div>

        <div
          className={`${"step_connector"} ${route3 ? "active" : ""}`}
        ></div>
        <div className={`${"step"} ${route3 ? "active" : ""}`}>
          <div className={"step_number"}>4</div>
          <span className={"step_name tracker_text"}>Confirmation</span>
        </div>
      </div>

      <div className={"status_message bg-transparent"}>
        <p>We are reviewing the products in your cart</p>
        <p>You can continue adding or editing items before proceeding</p>
      </div>
    </div>
  );
}
