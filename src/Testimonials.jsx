
import React from 'react';

import Work from './Work';
import Sdata from "./Sdata";

const Testimonial = () => {

        return (
                <>
                        <div className="my-5">
                                <h1 className="text-center">MY WORK</h1>
                                <hr/>
                        </div>
                        <div className="container-fluid mb-5">
                                <div className="row">
                                        <div className="col-10 mx-auto">
                                                <div className="row gy-4">
                                                       {Sdata.map((val, ind)=>{
                                                               return <Work key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text}/>
                                                       })

                                                       }
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>

        )


}

export default Testimonial;