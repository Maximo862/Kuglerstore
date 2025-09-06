import { IoIosLock } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import deliveryfast from "../IMGS/pexels-norma-mortenson-4393426 (1).jpg";
import Support from "../IMGS/pexels-tima-miroshnichenko-6169055 (1).jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { LuSmartphone } from "react-icons/lu";

export function Imgsmain() {
  return (
    <div className="container imgsmain-container">
      <h2 style={{ textAlign: "center" }}>Why shop with us?</h2>

      <div className="row">
        <div className="card_cointainer col-12 col-md-6 mb-3">
          <div className="card">
            <img className="img_main" src={deliveryfast} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div className="card__content mb-3">
              <p className="card__title">Fast shipping</p>
              <p className="card__description">Get your order in 24-48 hours</p>
            </div>
          </div>
          <h3>
            <TbTruckDelivery />
            Fast shipping
          </h3>
        </div>

        <div className="card_cointainer col-12 col-md-6 mb-3">
          <div className="card">
            <img className="img_main" src={Support} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div className="card__content mb-3">
              <p className="card__title">24/7 Customer Support</p>
              <p className="card__description">Always here to help</p>
            </div>
          </div>
          <h3>
            <LuSmartphone />
            24/7 Customer Support
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="card_cointainer col-12 col-md-6 mb-3">
          <div className="card card-icon">
            <IoIosLock size={100} />
            <div className="card__content mb-3">
              <p className="card__title">Secure checkout</p>
              <p className="card__description">
                Your data is protected with SSL encryption
              </p>
            </div>
          </div>
          <h3>
            <MdOutlineSecurity />
            Secure checkout
          </h3>
        </div>

        <div className="card_cointainer col-12 col-md-6 mb-3">
          <div className="card card-icon">
            <FaArrowRightArrowLeft size={100} />
            <div className="card__content">
              <p className="card__title">Easy returns</p>
              <p className="card__description">
                You have 30 days to change your mind
              </p>
            </div>
          </div>
          <h3>
            <GiReturnArrow />
            Easy returns
          </h3>
        </div>
      </div>
    </div>
  );
}
