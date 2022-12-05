import React from "react";
// import { IBsBorderWidth } from "react-icons/ib"
import { FaList } from "react-icons/fa";
const Offcanvas = () => {
  return (
    <>
      <button
        className="btn btn-light m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <FaList />
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ backgroundColor: "#86E4EA" }}
      >
        <div className="offcanvas-header" style={{ paddingLeft: "90%" }}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            className="justify-content-center"
            // style={{
            //   // display: "flex",
            //   // margin: "40px",
            //   borderRadius: "25px",
            // }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // paddingLeft: "25%",
                backgroundColor: "#EEF5F6",
                borderRadius: "5px",
                // padding: "2px",
                paddingTop: "12px",
                margin: "20px",
              }}
            >
              <p>1st &amp; 2nd year</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // paddingLeft: "25%",
                backgroundColor: "#EEF5F6",
                borderRadius: "5px",
                paddingTop: "12px",
                // paddingBottom: "px",
                margin: "20px",
              }}
            >
              <p>3rd &amp; 4th year</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // paddingLeft: "25%",
                backgroundColor: "#EEF5F6",
                borderRadius: "5px",
                paddingTop: "12px",
                // padding: "2px",
                margin: "20px",
              }}
            >
              <p>rest</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Offcanvas;
