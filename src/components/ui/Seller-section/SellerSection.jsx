import React from "react";
import "./seller.css";
import { Container, Row, Col } from "reactstrap";
import { SELLER__DATA } from "../../../assets/data/data";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfilesAction } from "../../../redux/actions/profileAction";

const SellerSection = () => {
  const dispatch = useDispatch();

  const [profiles, setProfiles] = useState([])



  useEffect(() => {
    const params = { page: 0, size: 10, sortBy: 'createdAt' }
    dispatch(fetchProfilesAction(params)).then(response => {

      setProfiles([...profiles, ...response['content']])
    });
  }, [])




  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Donators </h3>
            </div>
          </Col>

          {profiles && profiles.map((profile, index) => (
            <Col lg="2" md="3" sm="4" xs="6" key={index} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={profile.avatar} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{profile.name}</h6>
                  <h6>{profile.starts} Starts</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
