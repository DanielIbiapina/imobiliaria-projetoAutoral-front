import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../contexts/userContext";
import Guepardo from "../pages/guepardo";
import SenoGraph from "../pages/guepardoGraphics";
import Home from "../pages/home";
import Property from "../pages/property";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Admin from "../pages/admin";
import Announcement from "../pages/announcement";
import Contact from "../pages/contact";
import RealStateDevelopment from "../pages/realstate-development";

const NotFound = () => {
  return <p>Não encontrado</p>;
};

function RoutesApp() {
  const [id, setId] = useState(0);
  const [token, setToken] = useState("");

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }
  function setAndPersistId(id) {
    setId(id);
    localStorage.setItem("id", id);
  }

  return (
    <>
      <UserContext.Provider
        value={{
          id,
          setId,
          setAndPersistId,
          token,
          setToken,
          setAndPersistToken,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/guepardo" element={<Guepardo />} />
          <Route path="/guepardographics" element={<SenoGraph />} />
          <Route path="/property/:id" element={<Property />} />
          <Route
            path="/realstate-development/:id"
            element={<RealStateDevelopment />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default RoutesApp;
