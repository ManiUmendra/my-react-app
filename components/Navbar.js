import React from "react";
import {
    Link
  } from "react-router-dom";

function NavBar(prop){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${prop.mod} bg-${prop.mod}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{prop.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    
      <form className="d-flex">
        {/*<input id="txt" className="form-control me-2" type="search" placeholder="Enter Text Value" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Submit</button>*/}
        <input  onChange={prop.onChange} type="checkbox" className="btn-check" id="btn-check" autocomplete="off"/>
        <label  className="btn btn-primary" for="btn-check">{prop.text}</label>
    </form>
    </div>
  </div>
</nav>
    );
}


NavBar.defaultProps = {
    title:"Hello"
}
export default NavBar;