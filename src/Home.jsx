
import React from 'react';
// import { NavLink } from 'react-router-dom';
import pic from "../src/images/Milan.jpg";
import Comman from "./comman";
const Home = () => {

        return (

                   <Comman 
                 name="MILAN BHALANI"
                 h4="Web Developer"
                 btnname="More Info"
                 target="/about"
                 imgs={pic} 
                 id="home"
                 headingid="hometext"/>
        )


}

export default Home;