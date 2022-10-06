import { Home, Question } from "./pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import {ModalCancha} from "./components"

function App() {
  const modalData = useSelector(state => state.chanchaModal)

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
