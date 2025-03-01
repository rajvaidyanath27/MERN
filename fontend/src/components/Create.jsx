import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  //This function is responsible for sending user data from React to the backend (Express + MongoDB)
  const handleSubmit = async (e)=>{

    e.preventDefault();

    const addUser = {name,email,age};

    const response = await fetch("http://localhost:5000" ,{
        
        method:"POST",
        body: JSON.stringify(addUser),
        headers: {
            "Content-Type": "application/json",
        }
    });

    const result = await response.json();

    if(!response.ok){
        console.log(result.error);
    }

    if(response.ok){
        console.log(result);
        setAge("");
        setEmail("");
        setName("");
        navigate("/all");
    }

  }

  return (
    <div className="container my-2">
      <h2 className="text-center">Enter the data</h2>
 
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
