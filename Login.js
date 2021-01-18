import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import services from "./Services/services";
import { Button, Form, Row } from "react-bootstrap";

function Login() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [nameerror, setNameError] = useState("");
  const [pswderror, setPswdError] = useState("");
  const [result, setResult] = useState("");
  const [commerror, setCommError] = useState("");
  const login = () => {
    //json
    const data = {
      email: name,
      password: pswd,
    };
    if (name === "") {
      setNameError("Enter valid Email ");
    } else {
      setNameError("");
    }
    if (pswd === "") {
      setPswdError("Enter valid password ");
    } else {
      setPswdError("");
    }

    if (!nameerror && !pswderror) {
      services.login(data).then((Response) => {
        console.log(Response)

        if (Response.status === 200) {
          localStorage.setItem("item", true);
          setName("");
          setPswd("");
          setResult(Response.data);
          history.push("/colors");
        } 
      }).catch(error=>{
        console.log("a");
        setCommError("failure");
      })
    }
  };
  const changeuserName = (event) => {
    setName(event.target.value);
  };
  const changeuserPswd = (event) => {
    setPswd(event.target.value);
  };
  // console.log(nameerror);
  // console.log(pswderror);

  return (
    <Form>
      <Row className="justify-content-md-center">
        <div
          style={{
            textAlign: "center",
            backgroundColor: "lightblue",
            width: "100%",
            height: "100vh",
          }}
        >
          <h1>Login</h1>
          <div>
            <div className="form">
              {commerror && <p className="text-danger">{commerror}</p>}
              <Row className="justify-content-md-center">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="formf"
                    type="email"
                    value={name}
                    onChange={changeuserName}
                    placeholder="Enter Email"
                  />
                  {nameerror && (
                    <div className="text-danger text-left">{nameerror}</div>
                  )}
                </Form.Group>
              </Row>

              <Row className="justify-content-md-center">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="formf"
                    type="password"
                    value={pswd}
                    onChange={changeuserPswd}
                    placeholder="Password"
                  />
                  {pswderror && (
                    <div className="text-danger text-left">{pswderror}</div>
                  )}
                </Form.Group>
              </Row>

              <Row className="justify-content-md-center">
                <Button
                  variant="success"
                  style={{ width: "100%" }}
                  className="forms"
                  size="lg"
                  block
                  onClick={login}
                >
                  Login
                </Button>
              </Row>

              <Form.Text className="text-muted">
                Not registered? <Link to="/login">Create new account</Link>
              </Form.Text>

              <Form.Text className="text-muted">
                <Link to="/register">sign-in</Link>
              </Form.Text>
            </div>
          </div>
        </div>
      </Row>
    </Form>
  );
}
export default Login;
