import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";

const Layout = ({ currentUserId }) => {
  return (
    <div>
      <Header currentUserId={currentUserId} />
      <Routers currentUserId={currentUserId} />
      <Footer currentUserId={currentUserId} />
    </div>
  );
};

const mapStateToPops = (state) => ({
  currentUserId: state?.auth?.user?.id || null,
});

export default connect(mapStateToPops)(Layout);
