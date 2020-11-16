
import React from 'react';

// import { NavLink } from 'react-router-dom';
import pic from "../src/images/earth.webp";
import Comman from "./comman"
const About =() => {
   
        return(
    
            <Comman name="About Me" 
             btnname="Contact Me"
              target="/contact"
               imgs={pic}
                id="about"
                 headingid="aboutme" 
                 h5="Hello My Name is Milan Bhalani. I am Study as a computer engineering in Junagadh.
            My College name is Dr. Subhash technical campus. I pass out 6 sem with 7.71 CPI."
             h52="I have created two project with the help of Python, Djnago and React.For contact me to click the below button." />
           
        )
    
    
}

export default About;