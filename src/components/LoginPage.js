import React from "react";
import './tt.css';
import iiitd from './iiitd.png';
import iiitd_image from './iiitd.jpg';
// import NavBar from "./nav";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
  const A=()=>
  <div id="head" style={{marginBottom:"2%"}}>
  <img src={iiitd} alt="iiitd" style={{width: "25%",height: "70px",paddingTop:"10px",marginBottom:"-0.7%"}}/>
  <p style={{marginLeft:"45%",fontSize:"200%", marginTop:"-4.5%",color:""}} >IIITD Login</p>
  </div>
function Login() {

  const navigate = useNavigate();
  function checkk(){
    var x = document.getElementById("form2Example2");
    if (x.type == "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
  }
  function handleClick(){
    var email = document.getElementById("form2Example1").value; 
    // window.alert(email)
    var pass_word=document.getElementById("form2Example2").value; 
    
    if(email=="abhishek19402@iiitd.ac.in" && pass_word==("abhishek")){
      navigate("/CourseList")
    }
    else{
      window.alert("Wrong Email Id or Password!")
    }
    
  }
  
  // let history= useHistory();
  return (
  
  <div id="formm">
    <A/>
  <form>
  <div class="form-outline mb-2">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" required/>
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" required/>
    <div style={{flex:"row",display:"flex"}}>
      <input type="checkbox" onChange={checkk}/>
      <p style={{fontSize:"80%",marginLeft:"1%",marginBottom:"0%"}}>Show Password</p>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"/>
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" class="btn btn-primary btn-block mb-4" id="login_button" onClick={handleClick}>Sign in</button>
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form>
</div>
);}
export default Login;