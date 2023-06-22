import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../../assets/images/hero.jpg";
import { authAction } from "../../redux/actions/authAction";
import "./hero-section.css";
import AuthModal from "./Modal/AuthModal";

const HeroSection = ({ currentUserId }) => {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const onBtnHeroHandle = (action) => {
    if (!action) {
      return;
    }

    if (action === "explore") {
      navigate("/explore");
      login && setLogin('')
    } else {
      if (currentUserId) {
        navigate("/create");
        login && setLogin('')
      } else {
        setLogin("Sign in to create a donation 🙂");
      }
    }
    // setLogin("Sign in to create a donation 🙂");
  };

  const onHandleAuth =   credentials => {
      dispatch(authAction(credentials)).then(response=> {
        if( response.token ) {
            navigate("/create");
            login && setLogin('')
        }
      })
  }

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
                  <i className="ri-hand-heart-fill"></i>
                  Donate
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

      {login !== "" && <AuthModal login={login} setShowModal={(val) => setLogin(val)} onSubmit={(credentials) => onHandleAuth(credentials)} />}
    </section>
  );
};

export default HeroSection;
