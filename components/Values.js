import React from "react";

const Values = () => {
  return (

<section>

<h1 className="heading">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.
     Sint maiores
      quod magni inventore?</h1>


<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh" }}>
  <ul style={{ display: "flex", listStyle: "none", textAlign: "center" }}>
    <li className="nav-item" style={{ fontSize: "15px", marginRight: "20px", textAlign: "center" }}>
      <a className="nav-link active" aria-current="page" href="#">ALLPRODUCT</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight: "20px" }}>
      <a className="nav-link active" aria-current="page" href="#">LIFESTYLE</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight: "20px" }}>
      <a className="nav-link active" aria-current="page" href="#">BRAND</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight: "20px" }}>
      <a className="nav-link active" aria-current="page" href="#">OUTWEAR</a>
    </li>
  </ul>
</div>

<div class="container-fluid">
    <div class="row">
    <div class="col-md-6 p-0" style={{
  height: "500px",
  width:"100%",
  backgroundImage: "url('Img/same1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  textAlign: "center", 
}}>
</div>




    </div>
   </div>
</section>
  );
};

export default Values;
