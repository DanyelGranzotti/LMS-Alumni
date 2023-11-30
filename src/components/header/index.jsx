import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="mobile-header">
        <div className="text-2xl font-bold flex justify-between items-center w-full mb-12">
          ALUMNI.
          {!menuOpen ? (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => toggleMenu()}
            />
          ) : (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => toggleMenu()}
            />
          )}
        </div>
        {menuOpen && (
          <div
            className={"flex  flex-col space-y-12 justify-center items-center"}
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Saiba mais
            </NavLink>
            <NavLink className="nav-link" to="/statement">
              Depoimentos
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Faça parte!
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        )}
      </div>
      <div className="desktop-header">
        <div className="text-2xl font-bold">ALUMNI.</div>
        <div className="flex space-x-8 text-2xl">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            Saiba mais
          </NavLink>
          <NavLink className="nav-link" to="/statement">
            Depoimentos
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Faça parte!
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
