import { useState, useContext } from "react";
import { Authcontext } from "../Context/Authcontext";

export function UseHandleform(mode = "login") {
  const { Register, Login } = useContext(Authcontext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Handlesubmit(e) {
    e.preventDefault();
    if (mode === "login") {
      const User = {
        email,
        password,
      };
      await Login(User);
    } else {
      const User = {
        username,
        email,
        password,
      };
      await Register(User);
    }
  }
  return {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    Handlesubmit,
  };
}
