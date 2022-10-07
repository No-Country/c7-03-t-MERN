import { Login, Home, Question } from "./pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Question />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
