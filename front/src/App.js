
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Question, ErrorPage, RegisterPage, Contact } from "./pages";
import { useSelector } from "react-redux";
import { ModalCancha } from "./components";
import React from "react";
import "./App.css";

function App() {
  const modalData = useSelector((state) => state.chanchaModal);

  return (
    <BrowserRouter>
      {modalData !== null && <ModalCancha />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;