import  React,{useState} from "react";
import { Button,Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import services from './Services/services'

 function Users() {
  const [users, setUsers] = React.useState([]);
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [result, setResult] = useState("");
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  const remove=() => {
  const data={
    "email": name,
    "password": pswd
   }
   console.log(name)
   
   services.remove(data).then(Response=>{
     setResult(Response.data)
   })
 }
 const deletename =(event)=>{
  setName(event.target.value)
}
const deleteemail=(event)=>{
 setPswd(event.target.value)
}
console.log(result)
//update
const update=(id) => {
  const data={
    "email": name,
    "password": pswd
   }
   console.log(name)
   
   services.update(data,id).then(Response=>{
     setResult(Response.data)
   })
 }
console.log(result)
  return (
    <div className="App">
      <div>
      <h1 className="header">List Of Users</h1>
  
      <Card.Body style={{width:"18rem"}}>
      <Link to="/login">Users</Link>/
       <Link to ="/register">Home</Link>
       </Card.Body>

       
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <Card key={user.id} className="w-20">
                <Card.Img variant="top" src={user.avatar} />
                <Card.Text onChange={deletename}>{user.first_name}</Card.Text>
                <Card.Text onChange={deleteemail}>{user.email}</Card.Text>
                <Card.Body>
                <Card.Link> 
                <Button variant="danger" onClick={remove}>Delete</Button>
                </Card.Link>
                <Card.Link> 
                <Button variant="primary" onClick={update}>Update</Button>
                </Card.Link> 
              </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
    </div>
  );
}
export default Users