import React, { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Drawer from "./Drawer";

function App() {
  const [drawer, setdrawer] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const toggledrawer = () => {
    if (window.innerWidth > 1300) {
      setSidebar((preVal) => !preVal);
    } else {
      setdrawer((value) => !value);
    }
  };
  return (
    <div className="app">
      <Header toggledrawer={toggledrawer} />
      <div className="app__page">
        <Sidebar sidebar={sidebar} />
        <Recommended />
      </div>
      <Drawer drawer={drawer} toggledrawer={toggledrawer} />
    </div>
  );
}

export default App;
