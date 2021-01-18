import React, { useState } from "react";
import services from "./Services/services";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [nameserror, setNamesError] = useState("");
  const [pswdserror, setPswdsError] = useState("");
  const [commerror, setCommError] = useState("");

  const [result, setResult] = useState("");

  const submit = () => {
    //json
    const data = {
      email: name,
      password: pswd,
    };
    if (name === "") {
      setNamesError("Enter valid Email ");
    } else {
      setNamesError("");
    }
    if (pswd === "") {
      setPswdsError("Enter valid password ");
    } else {
      setPswdsError("");
    }
    console.log(name);
    if (!nameserror && !pswdserror) {
      services.create(data).then((Response) => {
        setName("");
        setPswd("");
        setResult(Response.data);
        if (Response.status === 200) {
          setCommError("success");
        } else {
          setCommError("failure");
        }
      });
    }
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePswd = (event) => {
    setPswd(event.target.value);
  };
  console.log(nameserror);
  console.log(pswdserror);
  return (
    <Form>
      <Row className="justify-content-md-center">
        <div
          style={{
            textAlign: "center",
            backgroundColor: "green",
            width: "100%",
            height: "100vh",
          }}
        >
          <h1>Register</h1>
          <div>
            <div className="form">
              {commerror && <p className="text-success">{commerror}</p>}
              <Row className="justify-content-md-center">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="formf"
                    type="email"
                    value={name}
                    onChange={changeName}
                    placeholder="Enter Email"
                  />
                  {nameserror && (
                    <div className="text-danger text-left">{nameserror}</div>
                  )}
                </Form.Group>
              </Row>

              <Row className="justify-content-md-center">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="formf"
                    type="password"
                    value={pswd}
                    onChange={changePswd}
                    placeholder="Password"
                  />
                  {pswdserror && (
                    <div className="text-danger text-left">{pswdserror}</div>
                  )}
                </Form.Group>
              </Row>

              <Row className="justify-content-md-center">
                <Button
                  className="forms"
                  variant="success"
                  size="lg"
                  block
                  onClick={submit}
                >
                  Register
                </Button>
              </Row>

              <Form.Text className="text-muted">
                <Link to="/Users">users</Link>
              </Form.Text>
            </div>
          </div>
        </div>
      </Row>
    </Form>
  );
}
export default Register;
