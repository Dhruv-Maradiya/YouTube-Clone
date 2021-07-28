import React from "react";
import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
