import React from "react";

import { NavLink } from 'react-router-dom';
const Work = (props) => {
    return (
        <>
        
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                     <h5 className="card-title font-weigth-bold">{props.title}</h5>
                 <p className="card-text">{props.text}</p>
                        <NavLink to="#" className="btn btn-info">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work;