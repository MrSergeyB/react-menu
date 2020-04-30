import React from "react";
import "./menu.css";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <Link className="menu__item" activeClassName="active" to="/">
          Главная
        </Link>
        <Link className="menu__item" activeClassName="active" to="/drift">
          Дрифт-такси
        </Link>
        <Link className="menu__item" activeClassName="active" to="/timeattack">
          Time Attack
        </Link>
        <Link className="menu__item" activeClassName="active" to="/forza">
          Forza Karting
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
