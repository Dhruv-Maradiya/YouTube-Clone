import React, { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Drawer from "./Drawer";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";

function App() {
  const Window = ({ Screen }) => {
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
      <>
        <Header toggledrawer={toggledrawer} />
        <div className="app__page">
          <Sidebar sidebar={sidebar} />
          <Screen />
        </div>
        <Drawer drawer={drawer} toggledrawer={toggledrawer} />
      </>
    );
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Window Screen={Recommended} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/" /> {/* Redirect to Home Screen */}
      </Switch>
    </div>
  );
}

export default App;
