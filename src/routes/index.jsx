import React from "react";
import { Routes, Route } from "react-router-dom";
import Guepardo from "../pages/guepardo";
import SenoGraph from "../pages/guepardoGraphics";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const NotFound = () => {
  return <p>Não encontrado</p>;
};

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/guepardo" element={<Guepardo />} />
        <Route path="/guepardographics" element={<SenoGraph />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
