import React, { useEffect, useRef, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";

import "./header.css";

const Header = (props) => {
  const { currentUser } = props

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener("scroll", () => {
        if ( headerRef.current.classList &&
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      });
    }
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo" onClick={() => navigate('/home')} >
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>
          <div className="nav__right d-flex align-items-center gap-2 mt-3 ">

            <button className="btn d-flex gap-2 align-items-center">
              <span className="cursor-pointer">
                <i className="ri-hand-heart-fill"></i>
              </span>
              <Link to="/create"> Donate </Link>
            </button>

            {currentUser && currentUser.email && <button className="btn d-flex gap-2 align-items-center">
              <span className="cursor-pointer">
                <i className="ri-user-line"></i>
              </span>
              <Link to="/profile"> {currentUser.name || 'Anonyme'}  </Link>
            </button>}

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.user,
}
)


export default connect(mapStateToProps)(Header);
