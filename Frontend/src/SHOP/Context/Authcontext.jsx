import { createContext, useState, useEffect } from "react";
import {
  LoginReq,
  Logoutreq,
  RegisterReq,
  Verifyreq,
} from "../Api/Authrequest";

export const Authcontext = createContext();

export function Authprovider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [autherrors, setAutherrors] = useState(null);

  async function Register(user) {
    try {
      const res = await RegisterReq(user);
      setIsAuthenticated(true);
      setUser(res.user.username);
    } catch (err) {
      setIsAuthenticated(false);
      setAutherrors(err);
      setUser(null);
    }
  }

  async function Login(user) {
    try {
      const res = await LoginReq(user);
      setIsAuthenticated(true);
      setUser(res.user.username);
    } catch (err) {
      setIsAuthenticated(false);
      setAutherrors(err);
      setUser(null);
    }
  }

  useEffect(() => {
    async function Verify() {
      try {
        const res = await Verifyreq();
        if (res?.error) {
          setIsAuthenticated(false);
          setUser(null);
        } else {
          setIsAuthenticated(true);
          setUser(res.user.username);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    Verify();
  }, []);

  async function Logout() {
    try {
      await Logoutreq();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {}
  }

  return (
    <Authcontext.Provider
      value={{
        isAuthenticated,
        Register,
        Login,
        loading,
        Logout,
        user,
        autherrors,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
