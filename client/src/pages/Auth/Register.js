import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import "./Auth.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';
import toaster from "react-hot-toast";
const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/api/v1/auth/register",
       {name,email,password,phone,address});
       if(res && res.data.success){
         toast.success(res.data.message)
         navigate("/login");
       }else{
        toast.error(res.data.message)
       }
    }catch(error){
      console.log(error)
      toast.error("something went")
    }
    // console.log(name,email,password,address,phone);
    // toast.success("Register successfully");
  };


  return (
    <Layout title="Register-Ecommerce app">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value = {name}
              onChange = {(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter your name"
              required
            />
           
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter your email"
              required
            />
           
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter your password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange = {(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter your phone number"
              required
            />
           
          </div>
          <div className="mb-3">
            <input
              type="address"
              value={address}
              onChange = {(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="address"
              required
            />
           
          </div>
        
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
