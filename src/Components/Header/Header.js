import React, { useState } from 'react';
import "./Header.css"

const Header = (props) => {




  
















    return (

        <>
        

            <nav className="navbar navbar-expand-lg navbar-dark primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/shop">Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/shop">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">Link</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link disabled" href="/shop">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* -----------------------nav bar end------------------------------------------------ */}



<div className="header">
    <h1 className="Title">Make <span className='thumb'> Bangladi </span> Movie Great Again </h1>
</div>
<div>
    <p className="p-2 text-center"><small>Movies are for entertainment, especially the archetypical films and their typical song and dance fanfare.  </small></p>
</div>
<div>
    <h1 className='text-center fs-3'>Total Budget: <span className="text-info">{props.display}</span> Million</h1>
</div>
<hr />


















        </>


















    );
};

export default Header;