import { FormCard } from "../Components/FormCard";
import { UseAuthredirect } from "../Hooks/UseAuthredirect";
import { UseHandleform } from "../Hooks/UseHandleform";

export function Register() {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    Handlesubmit,
  } = UseHandleform("register");

  UseAuthredirect();

  return (
    <section className="d-flex justify-content-center">
      <FormCard
        Handlesubmit={Handlesubmit}
        text={"Sign up to your account"}
        Inputs={
          <>
            <div className="input-container">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            
            <div className="input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </>
        }
        buttonsend={"Sign up"}
        link={{
          text: "acount?",
          path: "/login",
          text2: "Sign in",
        }}
      />
    </section>
  );
}
