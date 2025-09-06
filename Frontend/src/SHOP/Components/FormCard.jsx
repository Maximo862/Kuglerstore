import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";

export function FormCard({ Handlesubmit, Inputs, text, buttonsend, link }) {

const {autherrors} = useContext(Authcontext)

  return (
    <div>
      <form onSubmit={Handlesubmit} className="form">
        <p className="form-title">{text}</p>
        {Inputs}
          {autherrors && (
            <p style={{color: "red", textAlign:"center"}}>{autherrors.error}</p>
          )}
        <button type="submit" className="form-submit">
          {buttonsend}
        </button>

        <p className="signup-link">
          {link.text}
          <Link to={link.path}>{link.text2}</Link>
        </p>
      </form>
    </div>
  );
}
