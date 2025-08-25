import { useContext } from "react";
import { Authcontext } from "./Context/Authcontext";
import { Navigate, Outlet } from "react-router-dom";

function Protectedroutes() {
  const { isAuthenticated, loading } = useContext(Authcontext);

  if (loading) return <p>Loading...</p>;
  if (isAuthenticated === false) return <Navigate to={"/"} replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Protectedroutes;
