import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Create from "../pages/Create";
import Contact from "../pages/Contact";

import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Explore from "../pages/Explore";

const Routers = ({ currentUserId }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home currentUserId={currentUserId} />} />
      <Route
        path="/explore"
        element={<Explore currentUserId={currentUserId} />}
      />
      <Route
        path="/create"
        element={<Create currentUserId={currentUserId} />}
      />
      <Route
        path="/contact"
        element={<Contact currentUserId={currentUserId} />}
      />
      <Route
        path="/wallet"
        element={<Wallet currentUserId={currentUserId} />}
      />
      <Route
        path="/explore/:id"
        element={<NftDetails currentUserId={currentUserId} />}
      />
    </Routes>
  );
};

export default Routers;
