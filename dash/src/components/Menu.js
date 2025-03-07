import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(""); // Added state for username
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUserId(storedUser.userId);
      setUserName(storedUser.name); // Extract and set user name
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserName(""); // Clear user name on logout
    localStorage.removeItem("user");
  };

  return (
    <div className="menu-container">
      <img src="instock1.jpg" style={{ width: "112px" }} alt="Instock" />
      <div className="menus">
        <ul>
          {[
            { name: "Dashboard", path: "/" },
            { name: "Orders", path: "/orders" },
            { name: "Holdings", path: "/holdings" },
            { name: "Positions", path: "/positions" },
            { name: "Funds", path: "/funds" },
            { name: "Buy Orders", path: "/buy-orders" },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <p className="menu">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />

        {/* Login/Profile Section */}
        <div className="profile">
          {isLoggedIn ? (
            <>
              {/* <div className="avatar">NK</div> */}
              <p className="username"> {userName}</p> {/* Updated to use userName */}
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
