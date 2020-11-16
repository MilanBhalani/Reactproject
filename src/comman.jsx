
import React from 'react';

import { NavLink } from 'react-router-dom';
// import pic from "../src/images/earth.webp";
const Comman =(props) => {
   
        return(
            
                <section id="header" className="">
                <div className="container-fluid " id={props.id}>
                        
                        <div className="row">
                                <div className="col-10 mx-auto">
                                        <div className="row">
                                         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mt-5">
                                         <h1 className="d-flex junstify-content-center" id={props.headingid} >{props.name}</h1>
                                      <h4>{props.h4}</h4>
                                         <div>
                                          <h5>{props.h5}
                                                  </h5>
                                                  <hr/> 
                                                  <h5>{props.h52}</h5>      
                                                  </div>
                                                 <div className="mt-3">
                                                         <NavLink to={props.target} className="btn-infor">{props.btnname}</NavLink>
                                                 </div>
                                         </div>

                                         <div className="col-lg-6 order-1 order-lg-2 header-img">
                                                 <img src={props.imgs} id="image" alt="pic"/>
                                         </div>
                                         </div>
                                </div>
                        </div>
                </div>
        </section>
    
            
           
        )
    
    
}

export default Comman;