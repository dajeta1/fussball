import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/login");

  }


  return (
    <>
      <h2>Register hier...</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group mb-3">
          <label for="exampleFormControlInput1">Name</label>
          <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
        </div>

        <div className="form-group mb-3">
          <label for="exampleFormControlInput1">Email address</label>
          <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group mb-3">
          <label for="exampleFormControlInput1">Password</label>
          <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
        </div>

        <button type="submit" class="btn btn-primary mb-2">Register</button>

        <p>Have already an account ? <Link to="/login">Login here</Link></p>

      </form>
    </>
  )
}

export default Register