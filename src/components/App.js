import React, { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Drawer from "./Drawer";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((value) => !value);
  };
  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__page">
        <Sidebar />
        <Recommended />
      </div>
      <Drawer sidebar={sidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
