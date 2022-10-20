import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Home,
  Question,
  ErrorPage,
  RegisterPage,
  Contact,
  Login,
  Reserva
} from "./pages";
import { useSelector } from "react-redux";
import { ModalCancha, Navbar, Footer } from "./components";
import React from "react";
import "./App.css";

function App() {
  const modalData = useSelector((state) => state.chanchaModal);
  return (
    <BrowserRouter>
      <Navbar />
      {modalData !== null && <ModalCancha />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Question />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/booking" element={<Reserva />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
