import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Form,
  Input,
  InputText,
  MainAnnouncement,
  MainContact,
  PostButton,
} from "./styles";
import { useState, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import ContactComponent from "../../components/contact/ContactComponent";

export default function Contact() {
  async function createProperty() {
    try {
    } catch (e) {
      console.log(e);
      toast("Informações não foram enviadas!");
      //setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <MainContact>
        <h1>Nossas redes Sociais</h1>
        <p>
          • Instagram:{" "}
          <a href="https://www.instagram.com/martinsbrokers/">
            @martinsbrokers
          </a>
        </p>
        <p>
          • Instagram Pessoal:{" "}
          <a href="https://www.instagram.com/martinsmdaniel/">
            @martinsmdaniel
          </a>
        </p>
        <p>
          • WhatsApp: <a href="https://wa.me/351938374379">+351 938 374 379</a>
        </p>
        <ContactComponent />
      </MainContact>

      <Footer />
    </>
  );
}
