import { createContext, useState, useEffect } from "react";
import { LoginReq, Logoutreq, RegisterReq, Verifyreq } from "../Api/Authrequest";

export const Authcontext = createContext();

export function Authprovider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  async function Register(user) {
    try {
      const res = await RegisterReq(user);
      console.log("register res: ", res);
      setIsAuthenticated(true);
      setUser(res)
    } catch (err) {
      setIsAuthenticated(false);
     console.log(err)
     setUser(null)
    }
  }

  async function Login(user) {
    try {
      const res = await LoginReq(user);
      console.log("login res: ", res);
      setIsAuthenticated(true);
      setUser(res)
    } catch (err) {
      setIsAuthenticated(false);
      console.log(err)
       setUser(null)
    }
  }

  useEffect(() => {
    async function Verify() {
      try {
        const res = await Verifyreq();
        if (res?.error) {
          setIsAuthenticated(false);
           setUser(null)
        } else {
          setIsAuthenticated(true);
          setUser(res)
        }
      } catch (error) {
        console.log("error en verify: ", err);
        setIsAuthenticated(false);
         setUser(null)
      } finally {
        setLoading(false);
      }
    }

    Verify();
  }, []);

async function Logout() {
    try {
        const res = await Logoutreq()
        console.log("LOGOUT: ", res)
        setIsAuthenticated(false)
         setUser(null)
    } catch (error) {
        console.log(error)
    } finally {
setLoading2(false)
    }
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
        loading2
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
