import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
     <a className="navbar-brand" href="#" style={{fontSize:"20px"}}><span className="text-dark">CORSEN</span> </a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">PAGES</a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">SHOP</a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">BLOG</a>
          </li>
        </ul>
       
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">SEARCH</a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#"> <FaSearch /></a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#">CART </a>
          </li>
          <li className="nav-item" style={{fontSize:"15px"}}>
            <a className="nav-link active" aria-current="page" href="#"><FaShoppingBag /></a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar