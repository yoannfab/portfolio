import React from "react";
import Home from "../views/all-home-version/Home";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
