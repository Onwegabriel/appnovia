import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Host = () => {
  return (

    <section class="blog" id="blog">


    <div class="box-container">

        <div class="box reveal">
            <div class="image" style={{height:"500px"}}>
                <img src="img/p5.jpg" alt=""/>
            </div>
        </div>

        <div class="box reveal">
            <div class="image" style={{height:"500px"}}>
                <img src="img/p6.jpg" alt=""/>
            </div>
        </div>

        <div class="box reveal">
            <div style={{paddingTop:"60px"}}>
                <h1 class="heading">Meet The Artist <br/> Behind The Corsen <br/> Maria & Sophia</h1>
                <h4 class="heading" style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.
                                          ipsum dolor sit amet consectetur adipisicing elit. Sint maiores
                                         quod?
                <button style={{marginTop:"10%", width:"200px", height:"40px", borderColor:"black", borderStyle:"solid"}}>SHOP COLLECTION</button>                         
                </h4>
            </div>
            <div class="content">
            </div>
        </div>

    </div>

</section>

  )
}

export default Host