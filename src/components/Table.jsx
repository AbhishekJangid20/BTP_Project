import React from "react";

const Timetable = (params) => {
  return (
    <div className="d-flex flex-row mb-3">
      <div className="time">{params.day}</div>
      <div className="time">8-8:30</div>
      <div className="time">8:30-9</div>
      <div className="time">9:9:30</div>
      <div className="time">9:30-10</div>
      <div className="time">10-10:30</div>
      <div className="time">10:30-11</div>
      <div className="time">11-11:30</div>
      <div className="time">11:30-12</div>
      <div className="time">12-1:30</div>
      <div className="time">1:30-2</div>
      <div className="time">2-2:30</div>
      <div className="time">2:30-3</div>
      <div className="time">3-3:30</div>
      <div className="time">3:30-4</div>
      <div className="time">4-4:30</div>
      <div className="time">4:30-5</div>
      <div className="time">5-5:30</div>
      <div className="time">5:30-6</div>
      <div className="time">6-6:30</div>
    </div>
  );
};

export default Timetable;
