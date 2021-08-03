import React, { useEffect, useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Drawer from "./Drawer";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Login from "./Login";
import { useSelector } from "react-redux";

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
function App() {
  const history = useHistory();
  const { accessToken, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!accessToken && !loading) {
      history.push("/login");
    }
  }, [accessToken, loading, history]);
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
