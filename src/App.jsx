

import React from 'react';
import "./images/favicon.ico";
import Home from './Home';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contactus from './Contactus';
import Testimonial from './Testimonials';
import {Switch,Route} from "react-router-dom";
import Header from './Header';


const App =() => {
   
        return(
            <>
                <Header></Header>
                <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/about" component={About}></Route>
                            <Route exact path="/contact" component={Contactus}></Route>
                            <Route exact path="/testimonial" component={Testimonial}></Route>
                 </Switch>
              </>  
            
           
        )
    
    
}

export default App;