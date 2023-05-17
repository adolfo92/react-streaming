import { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login/index.js";

function App() {
  const [page, setPage] = useState("login");

  // Me traigo la informacion del usuario
  let userInfo = {
    /*credentials: "admin"*/
  };

  useEffect(() => {
    const currentUser = userInfo;
    if (currentUser.credentials) {
      setPage(`${currentUser.credentials}`);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      {/*Aqui declaro mi navbar general */}
      <nav className="navbar bg-dark sticky-top" data-bs-theme="dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="dropdown-item nav-link active">{page}</span>
          </li>
        </ul>
      </nav>

      {/*el cuerpo de la app */}

      {page === "login" && <Login />}
      {page === "user"}
      {page === "mod"}
      {page === "admin"}
    </>
  );
}

export default App;
