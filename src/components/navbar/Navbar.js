import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { navLinks } from "../../data";
import "./Navbar.css";

const Navbar = () => {
  const { state, setActiveNavlink, openNavSidebar, closeNavSidebar } =
    useGlobalContext();

  const handleClick = (id) => {
    setActiveNavlink(id);
    closeNavSidebar();
  };

  return (
    <nav>
      <div className="nav-container container">
        <div className="nav-logo">
          <Link to="/">
            <h1>FoodieHaven</h1>
          </Link>
        </div>

        <div className="nav-toggle">
          {state.showNavSidebar ? (
            <i
              className="fa-solid fa-circle-xmark"
              onClick={closeNavSidebar}
            ></i>
          ) : (
            <i className="fa-solid fa-bars" onClick={openNavSidebar}></i>
          )}
        </div>

        <div
          className={
            state.showNavSidebar ? "show-nav-sidebar nav-links" : "nav-links"
          }
        >
          <ul>
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  className={
                    state.activeNavLink === item.id
                      ? "active-navlink"
                      : undefined
                  }
                >
                  <li onClick={() => handleClick(item.id)}>{item.title}</li>
                </Link>
              );
            })}
          </ul>
          <h4>{state.activeNavlink}</h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
