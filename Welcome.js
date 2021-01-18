import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Welcome() {
  return (
    <div>
      <h1>login to continue.......</h1>
      <Link to="/Login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default Welcome;
