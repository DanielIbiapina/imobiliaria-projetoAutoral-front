import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../contexts/userContext";
import Guepardo from "../pages/guepardo";
import SenoGraph from "../pages/guepardoGraphics";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const NotFound = () => {
  return <p>Não encontrado</p>;
};

function RoutesApp() {
  const [wheelbase, setWheelbase] = useState(1380);
  const [caster, setCaster] = useState(23);
  const [forward, setForward] = useState(29.7);
  const [front, setFront] = useState(560);
  const [rear, setRear] = useState(602);
  const [frontwheel, setFrontwheel] = useState(602);
  const [rearwheel, setRearwheel] = useState(602);

  return (
    <>
      <UserContext.Provider
        value={{
          wheelbase,
          setWheelbase,
          caster,
          setCaster,
          forward,
          setForward,
          front,
          setFront,
          rear,
          setRear,
          frontwheel,
          setFrontwheel,
          rearwheel,
          setRearwheel,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/guepardo" element={<Guepardo />} />
          <Route path="/guepardographics" element={<SenoGraph />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default RoutesApp;
