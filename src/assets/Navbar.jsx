import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top w-100 d-flex justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ marginLeft: "5px" }}>
          <img src="/TLogo.png" width="40" height="40" style={{ marginLeft: "30px" }} className="d-inline-block align-top" alt="Travana Logo" />
          <h3 style={{ margin: "0", marginLeft: "10px" }}>Travana</h3>
        </a>
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm me-2">Login</button>
          <button type="button" className="btn btn-primary btn-sm" style={{marginRight: "10px"}}>SignIn</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
