import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ currentUserId }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>
          <div className="nav__right d-flex align-items-center gap-5 mt-3 ">
            <button className="btn d-flex gap-2 align-items-center">
              <span className="cursor-pointer">
                <i className="ri-user-line"></i>
              </span>
              <span
                style={{ borderLeft: "1px solid white", height: "17px" }}
              ></span>
              <Link to="/wallet"> Donate something </Link>
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
