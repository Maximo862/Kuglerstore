import { FaGithub } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <footer className="footer bg-dark text-white p-4 ">
      <div className="row d-flex">
        <div className="col-md-4 d-flex justify-content-center">
          <GiShoppingBag size={140} />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center text-align-center">
          <h2 style={{ fontSize: "3rem" }}>KuglerStore</h2>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <h3>Links</h3>
          <ul className="list-unstyled">
            <li className="mb-2 footer-icon">
              <a href="/" className="text-white footertexts">
                Home
              </a>
            </li>
            <li className="mb-2 footer-icon">
              <a href="/Cart" className="text-white footertexts">
                Cart
              </a>
            </li>
            <li className="mb-2 footer-icon">
              <a href="/Favorites" className="text-white footertexts">
                Favoritos
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 d-flex flex-column text-align-center">
          <h3>Networks</h3>
          <a
            href="mailto:Maximokugler9@gmail.com"
            target="_blank"
            className="text-white me-3 mb-2"
          >
            <SiGmail size={25} className="footer-icon gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/maximo-kugler-716962379/"
            target="_blank"
            className="text-white me-3 mb-2"
          >
            <FaLinkedinIn size={25} className="footer-icon linkedin" />
          </a>
          <a
            href="https://github.com/Maximo862"
            target="_blank"
            className="text-white mb-2"
          >
            <FaGithub size={25} className="footer-icon github" />
          </a>
        </div>
      </div>
    </footer>
  );
}
