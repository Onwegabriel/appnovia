import React from 'react'
import { FaShieldAlt, FaTruck, FaBox, FaMapMarker } from 'react-icons/fa';

const Policy = () => {
  return (
    <section>
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-6 p-0" style={{
  height: "100px",
  width:"25%",
  border:"2px solid black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute",fontSize:"15px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  <FaTruck style={{display:"inline-block", fontSize:"20px"}}/> FAST DELIVERY</h2> 
</div>

<div class="col-md-6 p-0" style={{
  height: "100px",
  width:"25%",
  border:"2px solid black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute",fontSize:"15px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  <FaBox style={{display:"inline-block", fontSize:"20px"}}/> FREE SHIPPING</h2> 
</div>

<div class="col-md-6 p-0" style={{
  height: "100px",
  width:"25%",
  border:"2px solid black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute", fontSize:"15px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <FaShieldAlt style={{display:"inline-block", fontSize:"20px"}}/>  SECURE CHECKOUT</h2> 
</div>

<div class="col-md-6 p-0" style={{
  height: "100px",
  width:"25%",
  border:"2px solid black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute",fontSize:"15px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  <FaMapMarker style={{display:"inline-block", fontSize:"20px"}}/>  ORDER TRACKING</h2> 
</div>


    </div>
   </div>
   </section>
  )
}

export default Policy