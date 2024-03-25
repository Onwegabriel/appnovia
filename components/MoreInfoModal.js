import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const More = () => {
  return (

<div class="container-fluid">
    <div class="row">
    <div class="col-md-6 p-0" style={{
  height: "500px",
  backgroundImage: "url('Img/man.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>MAN</h2> 
  <button style={{
      width: "200px",
      height: "70px",
      fontSize: "20px",
      borderColor: "black",
      borderStyle: "solid",
      marginTop:"40%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
  }}>SHOP COLLECTION</button>
</div>

<div class="col-md-6 p-0" style={{
  height: "500px",
  backgroundImage: "url('Img/woman.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
  <h2 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>WOMEN</h2> 
  <button style={{
      width: "200px",
      height: "70px",
      fontSize: "20px",
      borderColor: "black",
      borderStyle: "solid",
      marginTop:"40%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
  }}>SHOP COLLECTION</button>
</div>


    </div>
   </div>


    );
  };
  
  export default More;