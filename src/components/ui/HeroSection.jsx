import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./hero-section.css";

import heroImg from "../../assets/images/hero.jpg";
import AuthModal from "./Modal/AuthModal";

const HeroSection = ({ currentUserId }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");

  const onBtnHeroHandle = (action) => {
    if (!action) {
      return;
    }
    // debugger;
    // if (action == "explore") {
    //   navigate("/explore");
    // } else {
    //   if (currentUserId) {
    //     navigate("/create");
    //   } else {
    //     setLogin(true);
    //   }
    // }
    setLogin("Sign in to create a donation 🙂");
  };

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect
                <span className="gradient-words">sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi omnis neque adipisci sequi ullam unde in
                minus quis quos.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button
                  onClick={() => onBtnHeroHandle("explore")}
                  className="explore__btn d-flex align-items-center gap-2"
                >
                  <i className="ri-rocket-line"></i>
                  Explore
                </button>
                <button
                  onClick={() => onBtnHeroHandle("create")}
                  className="create__btn d-flex align-items-center gap-2"
                >
                  <i className="ri-ball-pen-line"></i>
                  Donate Something
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>

      {login !== "" && <AuthModal  login={login} setShowModal={(val) => setLogin(val)} />}
    </section>
  );
};

export default HeroSection;
