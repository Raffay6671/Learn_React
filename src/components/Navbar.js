import React from "react";

// #042743

export default function Navbar(props) {
    return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

<div className="container-fluid">
{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="navbar-brand" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          
        </li>
        <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a className="dropdown-item" href="#">Action</a></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">

          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li> */}

        
        <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="form-check form-switch mx-3">
        <input className="form-check-input" type="checkbox"  onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
        <label className= {`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault" >Enable dark Mode</label>
        </div>
        

        <div className="form-check form-switch mx-3">
        <input className="form-check-input" type="checkbox" onClick={props.toggleBlueMode} id="flexSwitchCheckBlue"/>
        <label className={`form-check-label text-${props.blueMode === 'enabled' ? 'light' : 'blue'}`} htmlFor="flexSwitchCheckBlue">Enable Blue Mode</label>
        </div>
      
    </div>
  </div>
</nav>


    );
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     link: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: "Title",
//     link: "Link"
// }
