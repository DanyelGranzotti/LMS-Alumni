import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex m-0 items-center">
      <div className="flex space-x-20 text-2xl w-7/12">
        <a href="https://ufc.br" target="_blank" rel="noreferrer">
          <img src="/public/svg/ufc.svg" alt="ufc" />
        </a>
        <NavLink to="/">
          <img src="/public/svg/alumni.svg" alt="alumni" />
        </NavLink>
      </div>
      <div className="flex text-2xl flex-col w-5/12 space-y-4">
        <NavLink to="/">Contato</NavLink>
        <NavLink to="/about">Sobre nós</NavLink>
        <NavLink to="/">Privacidade</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
