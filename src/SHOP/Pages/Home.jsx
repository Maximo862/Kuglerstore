import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
export function Home() {
  const { isAuthenticated, loading, user } = useContext(Authcontext);

  if (loading) return <p>loading...</p>;
  if (isAuthenticated === true && user)
    return <Navigate to={"/shop"} replace />;

  return (
    <section style={{ color: "#fff" }} className="home-hero">
      <div className="home-content text-center">
        <h2>WELCOME</h2>
        <p>
          Find the best products at the best price. Visit our store and start
          your experience
        </p>
      </div>
      <div className="d-flex flex-column gap-5 text-center">
        <div>
          <p>New here?</p>
          <Link className="home-button" to={"/register"}>
            Register
          </Link>
        </div>
        <div>
          <p>Do you have an acount?</p>
          <Link className="home-button" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
