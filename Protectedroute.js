import React, { useState} from "react";
import { Route, Redirect } from "react-router-dom";

const Prodectedroute = (props) => {
  const { component, ...rest } = props;
  const [isAuth, setstate] = useState(localStorage.getItem("item"));

  const Component = component;
  console.log(typeof isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === "true" ? <Component /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

export default Prodectedroute;
