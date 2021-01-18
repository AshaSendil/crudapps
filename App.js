import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigationbar from "./component/Navigationbar";
import Colors from "./component/Colors";
import Login from "./component/Login";
import Register from "./component/Register";
import Welcome from "./component/Welcome";
import Protectedroute from "./component/Protectedroute";
import "../src/component/Users.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />

        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Protectedroute path="/colors" component={Colors} />

          {/* <Route path="/colors" exact component={Colors}/> */}
          {/* <Route path="/Users" exact component={Users}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
