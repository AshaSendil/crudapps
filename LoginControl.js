import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const LoginControl = () => {
  //let history = useHistory();

  const [isAuth, setstate] = useState(localStorage.getItem("item"));
  // const isAuth=localStorage.getItem("item")
  useEffect(() => {
    setstate(localStorage.getItem("item"));
  }, [localStorage.getItem("item")]);
  const logout = () => {
    localStorage.setItem("item", false);
    //history.push("/login");
  };
  return (
    <div>
      {isAuth === "true" ? (
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
export default withRouter(LoginControl);
