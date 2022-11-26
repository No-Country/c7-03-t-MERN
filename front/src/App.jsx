import { ModalCancha, Navbar, Footer, Modal } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  RegisterPage,
  ErrorPage,
  Question,
  Contact,
  Reserva,
  Perfil,
  Search,
  Login,
  Home,
} from "./pages";
import { useSelector } from "react-redux";
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/preguntas" element={<Question />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/booking" element={<Reserva />} />
        <Route path="/search" element={<Search />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
