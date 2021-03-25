import React, { useState } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [clsID, setClsID] = useState("0");
  const handleClose = () => {
    setClick(!click);
    setClsID(click ? "0" : "250px");
  };

  return (
    <header>
      <h3 className="nav-title">Mr. Tech Code</h3>

      <ul className="ul-list">
        {NavItems.map((items, index) => {
          return (
            <li key={index} className={items.cName}>
              <Link to={items.path} className={items.class_Name}>
                <i className={items.icon} /> &nbsp; {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="moblile-nav">
        <i
          className={click ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClose}
          style={{ fontSize: "18px", color: "#fff" }}
        />
      </div>
      <div style={{ width: `${clsID}` }} className="sidenav">
        <h3 className="mb-title">Mr. Tech Code</h3>
        <ul className="mob-list">
          {NavItems.map((items, index) => {
            return (
              <li key={index} className={items.cName}>
                <Link to={items.path} className={items.class_Name}>
                  <i className={items.icon} /> &nbsp; {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
