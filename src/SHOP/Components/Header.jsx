import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../Pages/Cart/Cartcontext";
import { FilterContext } from "../Context/Shopcontext";
import logo from "../IMGS/kuglerlogo (1).png";
import logodark from "../IMGS/Logo_dark.png";
import { BsHousesFill, BsCartFill } from "react-icons/bs";
import { FaHeart, FaLightbulb } from "react-icons/fa";

export function Header() {
  const { numberofproducts } = useContext(Cartcontext);
  const { Darkmode, setDarkmode, numberoffavorites } = useContext(FilterContext);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={(Darkmode ? (logodark) : (logo))} className="Logo" alt="logo" />
        </div>
        
        <div className="links-container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                <BsHousesFill />
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Cart"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                <BsCartFill />
                Cart {numberofproducts}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Favorites"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                <FaHeart />
                Favorites {numberoffavorites}
              </NavLink>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light light-button"
                onClick={() => setDarkmode((prev) => !prev)}
              >
                <FaLightbulb />
                {Darkmode ? "Light mode" : "Dark mode"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
