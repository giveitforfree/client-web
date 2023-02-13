import React from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

const Home = ({currentUserId}) => {
  return (
    <>
      <HeroSection currentUserId={currentUserId} />
      <LiveAuction />
      <SellerSection />
      <Trending />
    </>
  );
};

export default Home;
