import React from "react";
import {useState} from 'react';
import './tt.css';
import iiitd from './iiitd.png';
import Login from "./LoginPage";
import { useNavigate } from 'react-router-dom';
import { width } from "@mui/system";
import { Visibility } from "@mui/icons-material";
function Courses(){
  const navigate = useNavigate();
  function handleClick(){
    navigate("/TimeTable")
  }
    return(
        <div>
        <A/>
        <B/>
        <C/>
        <D/>
        <E/>
        <button id="generate_timetable" onClick={handleClick}>Generate TimeTable</button>
        </div>
    )
}
const A=()=>
<div id="head" style={{marginTop:"0%",flex:"row",display:"flex",backgroundColor:"rgba(22, 209, 209,0.3)",marginBottom:"0%"}}>
<img src={iiitd} alt="iiitd" style={{width: "25%",height: "70px",paddingTop:"10px"}}/>
<p style={{fontSize:"40px",paddingLeft:"7.5%",color:"rgb(0,0,0,0.65)"}}>Welcome to IIITD TimeTable Portal</p>
</div>

function edit_butn1(){
  const paragraph = document.getElementsByClassName('c_name');
  const edit_button = document.getElementById("edit_button");
  // const end_button = document.getElementById("end-editing");
  const edit_cc=document.getElementsByClassName("c_code")
  // console.log(paragraph)
  // edit_button.innerHTML("Done")
  // print(paragraph)
  for (let i = 0; i < paragraph.length; i++) {
    edit_button.addEventListener("click", function() {
      paragraph[i].contentEditable = true;
      paragraph[i].style.backgroundColor = "#dddbdb";
    } );
  }
  for(let i=0;i<edit_cc.length;i++){
    edit_button.addEventListener("click", function() {
      edit_cc[i].contentEditable = true;
      edit_cc[i].style.backgroundColor = "#dddbdb";
    } );
  }
}

function Delete_butn(){
  // const [isVisible, setIsVisible] = useState(true);
  const dlt_but=document.getElementById("delete_button");
  const check_boxes=document.getElementsByClassName("check_box");
  console.log(check_boxes);
  for(let i=0;i<check_boxes.length;i++){
    dlt_but.addEventListener("click",function(){
      check_boxes[i].style.display="inline"
      // console.log(check_boxes[i].className)
    })
  }
}

function Done_butn(){
  const paragraph = document.getElementsByClassName('c_name');
  const done_button = document.getElementById("done_button");
  const edit_cc=document.getElementsByClassName("c_code")
  const check_boxes=document.getElementsByClassName("check_box");
  for (let i = 0; i < paragraph.length; i++) {
    done_button.addEventListener("click", function() {
      paragraph[i].contentEditable = false;
      paragraph[i].style.backgroundColor = "#ffffff";
    } );
  }
  for(let i=0;i<edit_cc.length;i++){
    done_button.addEventListener("click", function() {
      edit_cc[i].contentEditable = false;
      edit_cc[i].style.backgroundColor = "#ffffff";
    } );
  }
  for(let i=0;i<check_boxes.length;i++){
    if(check_boxes[i].checked==true){
      document.getElementById("table1").deleteRow(i+1);
    }
    check_boxes[i].style.display="none";
  }
  // for(let i=0;i<check_boxes.length;i++){
    
  // }
}

const B=()=>
<div style={{width:"70%",marginLeft:"22%",marginTop:"3%"}} >
<table className="table" id="table1">
  <thead>
    <tr>
      <th scope="col" style={{fontSize:"18px"}}>Course Name</th>
      <th scope="col" style={{fontSize:"18px"}}>Course Code</th>
      <th scope="col" style={{fontSize:"18px"}}>Professor</th>
      {/* <th></th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="col" className="c_name"> Network Security</th>
      <td className="c_code">NS</td>
      <td>
      <select style={{backgroundColor:"rgb(22, 209, 209)",color:"white",fontSize:"15px"}}>        
                <option >Bijendra Nath Jain (V)</option>
                <option >Jainendra Shukla</option>
                <option >Ojaswa Sharma</option>
                <option >Vikram Goyal</option>
        </select>
      </td>
      <td id="but">
      <input type="checkbox" name="" className="check_box"/>
      {/* <button id="edit_button" onClick={edit_butn1}>Edit</button> */}
      </td>
    </tr>
    <tr>
      <th scope="row" id="col" className="c_name" >Machine Learning</th>
      <td className="c_code">ML</td>
      <td>
      <select style={{backgroundColor:"rgb(22, 209, 209)",color:"white",fontSize:"15px"}}>        
                <option >Jainendra Shukla (V)</option>
                <option >Bijendra Nath Jain</option>
                <option >Ojaswa Sharma</option>
                <option >Vikram Goyal</option>
        </select>
      </td>
      <td id="but">
      <input type="checkbox" name="" className="check_box"/>
      {/* <button id="delete_button" onClick={Delete_butn}>Delete</button> */}
      </td>
    </tr>
    <tr>
      <th scope="row" id="col"  className="c_name">Computer Graphics</th>
      <td className="c_code">CG</td>
      <td>
      <select style={{backgroundColor:"rgb(22, 209, 209)",color:"white",fontSize:"15px"}}>        
                <option >Ojaswa Sharma (V)</option>
                <option >Bijendra Nath Jain</option>
                <option >Jainendra Shukla</option>
                <option >Vikram Goyal</option>
        </select>
      </td>
      <td id="but">
      <input type="checkbox" name="" className="check_box" />
      {/* <button id="done_button" onClick={Done_butn}>Done</button> */}
      </td>
    </tr>
    <tr>
      <th scope="row" id="col"className="c_name" >Data Mining</th>
      <td className="c_code">DMG</td>
      <td>
      <select style={{backgroundColor:"rgb(22, 209, 209)",color:"whitesmoke",fontSize:"15px"}}>        
                <option >Vikram Goyal (V)</option>
                <option >Bijendra Nath Jain</option>
                <option >Jainendra Shukla</option>
                <option >Ojaswa Sharma</option>
        </select>
      </td>
      <td id="but">
      {/* <button id="edit_button" onClick={edit_butn1}>Edit</button> */}
      {/* <button id="delete_button">Delete</button> */}
      <input type="checkbox" name="" className="check_box" />
      </td>
    </tr>
  </tbody>
</table>
<div>
  <button id="edit_button" onClick={edit_butn1}>Edit</button>
  <button id="delete_button" onClick={Delete_butn}>Delete</button>
  <button id="done_button" onClick={Done_butn}>Done</button>
</div>
</div>


function Add_butn(){
  const add_but=document.getElementById("add");
  const check_boxx=document.getElementsByClassName("check_box1");
  const check_b=document.getElementsByClassName("check_box");
  for(let i=0;i<check_boxx.length;i++){
    if(check_boxx[i].checked==true){
      var tab=document.getElementById("table1");
      // tab.insertRow(check_b.length+1);
      var tab1=document.getElementById("table2");
      // var r=tab1.rows.length;
      // tab1.rows[0].cells[0];
      var row = tab.insertRow(check_b.length+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = tab1.rows[i+1].cells[1].innerHTML;
      cell2.innerHTML = tab1.rows[i+1].cells[2].innerHTML;
      cell3.innerHTML=  tab1.rows[i+1].cells[3].innerHTML;
      check_boxx[i].checked=false;
    }
  }
}

const C=()=>
<div style={{marginTop:"5%"}}>
    <p style={{fontSize:"20px",color:"rgba(0,0,0,0.7",marginLeft:"46%"}}>All Courses</p>
</div>

const D = () =>
<table className="table" style={{marginTop:"1%",width:"80%",marginLeft:"10%"}} id="table2">
  <thead>
    <tr>
      <th scope="col" id="ac" className="k" ></th>
      <th scope="col" id="ac" style={{backgroundColor:"whitesmoke"}}>Course Name</th>
      <th scope="col" id="ac" style={{backgroundColor:"whitesmoke"}}>Course Code</th>
      <th scope="col" id="ac" style={{backgroundColor:"whitesmoke"}}>Professor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="ac" className="k"> <input type="checkbox" name="" id="" className="check_box1"/> </th>
      <td id="ac">Computational Gastronomy</td>
      <td id="ac">CGAS</td>
      <td id="ac">Ganesh Bagler</td>
    </tr>
    <tr>
      <th scope="row" id="ac" className="k"><input type="checkbox" name="" id="" className="check_box1"/></th>
      <td id="ac">Computing For Medicine</td>
      <td id="ac">CM</td>
      <td id="ac">Tavpritesh Sethi</td>
    </tr>
    <tr>
      <th scope="row" id="ac" className="k"><input type="checkbox" name="" id="" className="check_box1" /></th>
      <td id="ac">Biostatistics</td>
      <td id="ac">Bstats</td>
      <td id="ac">Gaurav Ahuja</td>
    </tr>
  </tbody>
</table>

const E =() =>
<button id="add" onClick={Add_butn}>Add</button>

export default Courses;