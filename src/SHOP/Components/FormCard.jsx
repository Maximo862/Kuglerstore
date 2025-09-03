import { Link } from "react-router-dom";

export function FormCard({ Handlesubmit, Inputs, text, buttonsend, link }) {
  return (
    <div>
      <form onSubmit={Handlesubmit} className="form">
        <p className="form-title">{text}</p>
        {Inputs}
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
