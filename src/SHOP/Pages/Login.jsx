import { useContext, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { Login, isAuthenticated } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const User = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (isAuthenticated === true) navigate("/Shop");
  }, [isAuthenticated]);

  async function Handlesubmit(e) {
    e.preventDefault();
    await Login(User);
  }

  return (
    <section>
      <div>
        <form onSubmit={Handlesubmit} className="form">
          <p className="form-title">Sign in to your account</p>
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
