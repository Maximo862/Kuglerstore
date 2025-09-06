import { useState, useId } from "react";
import { IoSearchOutline } from "react-icons/io5";

export function Filters({ change }) {
  const [valueinput, setvalueinput] = useState("");
  const [price, setprice] = useState(0);

  const priceid1 = useId();

  function Handle(e) {
    setprice(e.target.value);
    change((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  }

  function Handlename(e) {
    change((prevState) => ({
      ...prevState,
      sort: e.target.value,
    }));
  }

  return (
    <>
      <section className="nav-filter">
        <div>
          <h1 className="filter-title">KuglerStore</h1>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            placeholder="Product name"
            value={valueinput}
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              setvalueinput(value);
              change((prev) => ({
                ...prev,
                name: value,
              }));
            }}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor={priceid1} className="form-label">
            Price: {price}$
          </label>
          <input
            style={{ accentColor: "#ba7aee", width: "100%" }}
            type="range"
            className="form-range"
            id={priceid1}
            min="0"
            max="130"
            value={price}
            onChange={Handle}
          />
        </div>

        <div>
          <label htmlFor="">Filter</label>

          <select
            className="form-select"
            aria-label="Default select example"
            onChange={Handlename}
          >
            <option value="default">All</option>
            <option value="desc">From highest to lowest</option>
            <option value="asc">From lowest to highest</option>
          </select>
        </div>
      </section>
    </>
  );
}
