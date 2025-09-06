import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";

export function UseAuthredirect() {
  const { isAuthenticated } = useContext(Authcontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) navigate("/Shop");
  }, [isAuthenticated]);

  return {
    isAuthenticated,
  };
}
