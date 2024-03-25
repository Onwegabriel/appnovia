import React from "react";
import Navbar from "./Navbar";
import { FiCloud } from "react-icons/fi";
import { FaPodcast } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";


const Hero = () => {
  return (

        <section className="home" id="home" style={{ backgroundImage:"url('Img/home.jpg')"}}>
  <Navbar />
<div className="content">
    <h3 style={{marginTop:"60px"}}>Mixed Textiles</h3>
    <h4 style={{fontSize:"25px"}}>  There is no way I could have made the same <br /> progress learning Spanish
            without using Lingua
            become one of my biggest hobbies.</h4>
    <button className="collection" style={{width:"350px", height:"70px", fontSize:"30px",  borderColor:"black", borderStyle:"solid", marginTop:"25px"}}>SHOP COLLECTION</button>
    
</div>

</section>
  );
};

export default Hero;
