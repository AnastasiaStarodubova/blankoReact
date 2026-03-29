import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { Herro } from "./components/Herro";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Herro />
        <Landing />
      </main>
    </div>
  );
}

export default App;
