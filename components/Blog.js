import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsHeadset } from "react-icons/bs";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from '../styles/styles.css';
import '../styles/swiper-bundle.min.js';
import '../styles/script.js';


const Blog = () => {
  return (



<section class="artist" id="artist">

<h1 class="heading">Read Our Blog Post</h1>
<h4 class="heading">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.
     Sint maiores
      quod magni inventore?</h4>

<div class="box-container">

    <div class="box reveal">
        <div class="image">
            <img src="img/p3.jpg" alt=""/>
        </div>
        <div class="contentb" style={{textAlign:"center"}}>
        <div>
  <h4 style={{ display: "block", margin: "auto",position: "relative" }}>FASHION | INSPIRATION</h4>
  {/* <span class="cross" style={{ position: "absolute",marginBottom:"78%", bottom: "5px", left: "0", width: "99%", borderBottom: "1px solid black" }}></span> */}
  <h4 style={{ display: "block", margin: "auto",position: "relative",marginTop:"6%" }}>
    Top 10 Winter Essential In 2022 You Should <br/> Try<br/>
     <button style={{marginTop:"10%", width:"100px", height:"40px", borderColor:"black", borderStyle:"solid"}}>Read More</button>
    </h4>
  </div>
  </div>
  </div>

    <div class="box reveal">
        <div class="image" style={{height:"500px"}}>
            <img src="img/p2.jpg" alt=""/>
        </div>
        <div class="contentb" style={{textAlign:"center"}}>
        <div>
  <h4 style={{ display: "block", margin: "auto",position: "relative" }}>FASHION | INSPIRATION</h4>
  {/* <span class="cross" style={{ position: "absolute",marginBottom:"78%", bottom: "5px", left: "0", width: "99%", borderBottom: "1px solid black" }}></span> */}
  <h4 style={{ display: "block", margin: "auto",position: "relative",marginTop:"6%" }}>
    The Complete Communication Skill Master<br/>Class For Work<br/>
     <button style={{marginTop:"10%", width:"100px", height:"40px", borderColor:"black", borderStyle:"solid"}}>Read More</button>
    </h4>
  </div>
  </div>
  </div>

    <div class="box reveal">
        <div class="image">
            <img src="img/p4.jpg" alt=""/>
        </div>
        <div class="contentb" style={{textAlign:"center"}}>
        <div>
  <h4 style={{ display: "block", margin: "auto",position: "relative" }}>FASHION | INSPIRATION</h4>
  {/* <span class="cross" style={{ position: "absolute",marginBottom:"78%", bottom: "5px", left: "0", width: "99%", borderBottom: "1px solid black" }}></span> */}
  <h4 style={{ display: "block", margin: "auto",position: "relative",marginTop:"6%" }}>
    Premium Consultant Course For You<br/>
     <button style={{marginTop:"10%", width:"100px", height:"40px", borderColor:"black", borderStyle:"solid"}}>Read More</button>
    </h4>
  </div>
  </div>
  </div>
 
   

</div>

</section>


















   
  
  );
};

export default Blog;
