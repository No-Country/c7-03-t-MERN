import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Question, ErrorPage,RegisterPage } from "./pages";
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
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;