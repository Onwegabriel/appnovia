import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Essential = () => {
  return (


    <section className="blog" id="blog">

    <h1 className="heading">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.
     Sint maiores ipsa excepturi laboriosam, <br/> quos, minus voluptates non eaque,
     suscipit accusamus reprehenderit<br/>
      quod magni inventore?</h1>

<div style={{ display: "flex", justifyContent: "space-between" }}>
  <ul style={{ display: "flex", listStyle: "none"}}>
    <li className="nav-item" style={{ fontSize: "15px", marginRight:"18px" }}>
      <a className="nav-link active" aria-current="page" href="#">ALLPRODUCT</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight:"18px"}}>
      <a className="nav-link active" aria-current="page" href="#">LIFESTYLE</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight:"18px" }}>
      <a className="nav-link active" aria-current="page" href="#">BRAND</a>
    </li>
    <li className="nav-item" style={{ fontSize: "15px", marginRight:"18px"}}>
      <a className="nav-link active" aria-current="page" href="#">OUTWEAR</a>
    </li>
  </ul>
</div>


      
    <div className="box-container">

        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/main-product-list-2.jpg.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
 
                  <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
            </div>
            <div className="contentb" style={{height:"100px"}}>
                <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>BLACK JACKET <br/> $350.00</h3>
                    <div className="line"> 
                  <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/> 
                    </div><br/>
            </div>
        </div>

        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/white.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                 <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="contentb" style={{height:"100px"}}>
            <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>LEATHER JACKET <br/> $300.00</h3>
            <div className="line"> 
            <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/> 
                    </div><br/>
            </div>
        </div>

        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/p1.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                 <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="contentb" style={{height:"100px"}}>
            <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>T-SHIRT <br/> $120.00</h3>
            <div className="line"> 
                      <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/>
                    </div><br/>
            </div>
        </div>
        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/p8.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                 <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="contentb" style={{height:"100px"}}>
            <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>BLACK VEST <br/> $80.00</h3>
            <div className="line"> 
                      <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/>
                    </div><br/>
            </div>
        </div>
        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/p10.png')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                 <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="contentb" style={{height:"100px"}}>
            <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>BLACK HAT <br/> $45.00</h3>
            <div className="line"> 
                      <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/>
                    </div><br/>
            </div>
        </div>
        <div className="box reveal">
            <div className="image" style={{height:"500px", backgroundImage:"url('Img/p9.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <a href="#"><FaEye style={{fontSize:"25px", float:"right", marginRight:"40px", marginTop:"40px"}}/></a>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                 <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="contentb" style={{height:"100px"}}>
            <h3 style={{marginLeft:"40px", marginTop:"30px", display:"inline-block", textAlign:"center"}}>BIEGE T-SHIRT <br/> $60.00</h3>
                    <div className="line"> 
                      <FaShoppingBag style={{fontSize:"25px", margin:"auto", marginTop:"30px"}}/>
                    </div><br/>
            </div>
        </div>

    </div>

</section>

    

  );
};

export default Essential;
