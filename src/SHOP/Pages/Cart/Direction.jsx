import { useNavigate } from "react-router-dom";
import { ProgressTracker } from "./ProgressCart";
import { useContext } from "react";
import { Cartcontext } from "./Cartcontext";

export function Direction() {
 
const { Handleformnavigate } = useContext(Cartcontext)
const navigate = useNavigate()

  return (
    <>
      <ProgressTracker />
      <form onSubmit={((e) => Handleformnavigate(e,navigate,"/Direction/Payment"))} className="row g-3 needs-validation" noValidate>
        <h2>Shipping details: </h2>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label" required>
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder=""
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid Adress.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option value="" disabled={true}>
              Choose...
            </option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12 text-end">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </>
  );
}
