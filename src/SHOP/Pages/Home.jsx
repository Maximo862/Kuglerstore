import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";

export function Home() {
  const { isAuthenticated, loading,user } = useContext(Authcontext);

  if (loading) return <p>loading...</p>;
  if (isAuthenticated === true && user) return <Navigate to={"/shop"} replace />;

  return (
    <section>
      <h2>WELCOME</h2>
      <Link to={"/register"}>register?</Link>
      <Link to={"/login"}>login?</Link>
    </section>
  );
}
