import React from "react";
// import IIITD_Logo from "";
// import logo from ""
import iiitd from './iiitd.png';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#16D1D1", height:"15em"}}>
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <div style={{ display: "flex", justifyContent: "Center" }}>
          {/* <img src={iiitd} style={{width:"60%",marginLeft:"-35%"}} /> */}
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-1 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style={{color:"white",fontSize:"150%",marginLeft:"20%",marginTop:"30%"}}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white",fontSize:"150%",marginLeft:"20%"}}>
                Download
              </a>
            </li>
            {/* <li class="nav-item dropdown"> */}
            {/* <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            {/* </li> */}
            {/* <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
