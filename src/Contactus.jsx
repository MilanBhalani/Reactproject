
import React, { useState } from 'react';


const Contactus = () => {

        const [data,setData]=useState({
                fullname:"",
                phone:"",
                email:"",
                description:"",
        });
        const InputEvent = (event) => {
                const {name,value} = event.target;
                setData((preVal)=>{
                         return{
                                 ...preVal,
                                 [name]:value,

                         }
                });
        }
        const formSubmit = (e) => {
                e.preventDefualt();
                alert('heloo');
        }

        return (

                <>
                        <div className="my-5">
                                <h1 className="text-center">Contact Me</h1>
                        </div>
                        <div className="container contact_div">
                                <div className="row">
                                        <div className="col-md-6 col-10 mx-auto">
                                                <form onSubmit={formSubmit}>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">full Name</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                                                name="fullname"
                                                                value={data.fullname}
                                                                onChange={InputEvent}
                                                                placeholder="Enter Name here" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">full Name</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                                                name="fullname"
                                                                value={data.fullname}
                                                                onChange={InputEvent}
                                                                placeholder="Enter Name here" />
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                                                name="email"
                                                                value={data.email}
                                                                onChange={InputEvent}
                                                                placeholder="name@example.com" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                                                 name="description"
                                                                 value={data.description}
                                                                 onChange={InputEvent}
                                                                rows="3"></textarea>
                                                        </div>
                                                        <div className="col-12">
                                                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                                                        </div>
                                                </form>
                                        </div>
                                </div>

                        </div>

                </>



        )


}

export default Contactus;