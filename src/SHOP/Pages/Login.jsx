import { FormCard } from "../Components/FormCard";
import { UseAuthredirect } from "../Hooks/UseAuthredirect";
import { UseHandleform } from "../Hooks/UseHandleform";

export function Login() {
  const { email, setEmail, password, setPassword, Handlesubmit } =
    UseHandleform("login");
  UseAuthredirect();

  return (
    <section className="d-flex justify-content-center">
      <FormCard
        Handlesubmit={Handlesubmit}
        text={"Sign in to your account"}
        Inputs={
          <>
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
        buttonsend={"Sign in"}
        link={{
          text: "no acount?",
          path: "/register",
          text2: "Sign up",
        }}
      />
    </section>
  );
}
