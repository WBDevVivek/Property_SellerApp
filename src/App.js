import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// -----------------------------------------
import HomePage from "./Pages/HomePage";
import CardIndividual from "./Pages/CardIndividual";
// -----------------------------------------

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/property/:id" element={<CardIndividual />} />
      </Routes>
    </>
  );
}
