import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Home,
  Question,
  ErrorPage,
  RegisterPage,
  Contact,
  Login,
  Reserva,
  Perfil,
  Search
} from "./pages";
import { useSelector } from "react-redux";
import { ModalCancha, Navbar, Footer, Modal } from "./components";
import React from "react";
import "./App.css";

function App() {
  const modalData = useSelector((state) => state.chanchaModal);
  const modal = useSelector((state) => state.modal);
  return (
    <BrowserRouter>
      <Navbar />
      {modal !== null && <Modal />}
      {modalData !== null && <ModalCancha />}
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Question />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/booking" element={<Reserva />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
