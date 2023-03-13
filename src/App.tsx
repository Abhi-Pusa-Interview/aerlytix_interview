import React from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import Nav from "./component/NavBar/NavBar";

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
