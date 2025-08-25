import { Authcontext } from "../Context/Authcontext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { Register, isAuthenticated } = useContext(Authcontext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const User = {
    username: username,
    email: email,
    password: password,
  };

  useEffect(() => {
    if (isAuthenticated === true) navigate("/Shop");
  }, [isAuthenticated]);

  async function Handlesubmit(e) {
    e.preventDefault();
    await Register(User);
  }

  return (
    <section>
      <div>
        <form onSubmit={Handlesubmit} className="form">
          <p className="form-title">Sign in to your account</p>
          <div className="input-container">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="submit">
            Sign in
          </button>

          <p className="signup-link">
            No account?
            <a href="">Sign up</a>
          </p>
        </form>
      </div>
    </section>
  );
}
