import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom custom-navbar"

      style={{
        backgroundColor: "#fff",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        width: "100%",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="media/images/instock1.jpg" style={{ width: "30%" }} alt="Instock" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["Signup", "About", "Product", "Pricing", "Support"].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link active"
                  to={`/${item.toLowerCase()}`}
                  style={{
                    fontWeight: "normal",
                    transition: "font-weight 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                  onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
