import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function Colors() {
  const [newdata, setData] = useState("");

  useEffect(() => {
    axios.get("https://reqres.in/api/unknown").then((data) => {
      setData(data.data.data);
    });
  }, []);

  return (
    <>
      <div className="flex">
        {newdata &&
          newdata.map((data, index) => (
            <Card key={index}>
              <Card.Body style={{ backgroundColor: data.color }}>
                <Card.Text>{data.name}</Card.Text>
                <Card.Text>{data.year}</Card.Text>
                <Card.Text>{data.pantone_value}</Card.Text>
                <Card.Text>{data.color}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}
export default Colors;
