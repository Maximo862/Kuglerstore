import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cartcontext } from "../Pages/Cart/Cartcontext";
import { FilterContext } from "../Context/Shopcontext";
import logo from "../IMGS/kuglerlogo (1).png";
import logodark from "../IMGS/Logo_dark.png";
import { BsHousesFill, BsCartFill } from "react-icons/bs";
import { FaHeart, FaLightbulb } from "react-icons/fa";
import { Authcontext } from "../Context/Authcontext";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePermIdentity } from "react-icons/md";
import { ImExit } from "react-icons/im";

export function Header() {
  const { numberofproducts } = useContext(Cartcontext);
  const { Darkmode, setDarkmode, numberoffavorites } =
    useContext(FilterContext);
  const { isAuthenticated, Logout, loading } = useContext(Authcontext);

  const navigate = useNavigate();

  async function HandleLogout() {
    await Logout();
    if (loading === false) {
      navigate("/");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={Darkmode ? logodark : logo} className="Logo" alt="logo" />
        </div>
        {isAuthenticated ? (
          <div className="links-container">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  <BsHousesFill />
                  <span>Shop</span>
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
                  <span>Cart </span>{numberofproducts}
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
                  <span>Favorites</span> {numberoffavorites}
                </NavLink>
              </li>

              <li className="nav-item">
                <button className="nav-link" onClick={() => HandleLogout()}>
                  <ImExit />
                  Logout
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-light light-button"
                  onClick={() => setDarkmode((prev) => !prev)}
                >
                  <FaLightbulb />
                  <span>{Darkmode ? "Light mode" : "Dark mode"}</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
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
                  to="/register"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  <MdOutlinePermIdentity />
                  Register
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  <CiLogin />
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-light light-button"
                  onClick={() => setDarkmode((prev) => !prev)}
                >
                  <FaLightbulb />
                  <span>{Darkmode ? "Light mode" : "Dark mode"}</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
