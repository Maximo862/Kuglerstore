export function Categoryfilter({
  categoryactive,
  setcategoryactive,
  Typesofcategorys,
}) {
  return (
    <ul className="nav nav-underline navegationshop mb-4">
      <li className="nav-item">
        <a
          className={categoryactive == "All" ? "nav-link active" : "nav-link"}
          href="#"
          onClick={(e) => {
            e.preventDefault(), setcategoryactive("All");
          }}
        >
          All
        </a>
      </li>
      {Typesofcategorys.map((c) => {
        return (
          <li className="nav-item" key={c}>
            <a
              className={
                categoryactive == Typesofcategorys
                  ? "nav-link active"
                  : "nav-link"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault(), setcategoryactive(c);
              }}
            >
              {c}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
