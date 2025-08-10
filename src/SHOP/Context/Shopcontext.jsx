import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export function Shopcontext({ children }) {
  const [Darkmode, setDarkmode] = useState(false);

  const [fav, setfav] = useState(() => {
    const local = localStorage.getItem("fav");
    return local ? JSON.parse(local) : [];
  });

  const numberoffavorites = fav.length;

  useEffect(() => {
    if (Darkmode) {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  }, [Darkmode]);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  function Onclickfav(Addtofav) {
    const ifexist = fav.some((p) => p.id == Addtofav.id);
    if (ifexist) {
      const newarray = fav.filter((p) => p.id !== Addtofav.id);
      setfav(newarray);
    } else {
      const newarray2 = [...fav, Addtofav];
      setfav(newarray2);
    }
  }

  function Handlemessage(idproduct) {
    setmessage(true);

    setTimeout(() => {
      setmessage(false);
    }, 2000);
  }

  const [message, setmessage] = useState(false);

  function Mesagge() {
    return (
      <div
        className="fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: 9999,
        }}
      >
        <div className="toast-header">
          <strong className="me-auto">Cart</strong>
          <small>Product added</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    );
  }

  return (
    <FilterContext.Provider
      value={{
        Darkmode,
        setDarkmode,
        Onclickfav,
        fav,
        message,
        Mesagge,
        Handlemessage,
        numberoffavorites,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
