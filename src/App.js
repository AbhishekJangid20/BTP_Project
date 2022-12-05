import React from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Routes, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Offcanvas from "./components/Offcanvas";
import TimeTable from "./components/TimeTable";
import CsvWork from "./components/csvReading";
// import navbar from "./components/navbar";
import Login from "./components/LoginPage";
import CourseList from "./components/CourseList";
function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element ={<Login/>} />
        <Route path ="/CourseList" element ={<CourseList/>} />
        <Route path ="/TimeTable" element ={<TimeTable/>} />
        {/* <Offcanvas /> */}
        {/* <Timetable /> */}
        {/* <CsvWork /> */}
        {/* {<Login/>} */}
        {/* {<CourseList/>} */}
      </Routes>

    </div>
  );
}

export default App;
