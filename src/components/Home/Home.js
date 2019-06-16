import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.scss';
const home = (props) => (
       
    <div className="mainPage">
        <div className="bg-page"></div>
        <div className="collum">
            <div className="coverElm">
                <p className="text1">Your ride, on demand</p>
       
                <p className="text2">Whether you’re headed to work, the airport, or out on the town, Uber connects you with a reliable ride in minutes. One tap and a car comes directly to you.</p>
            </div>
            
             <div className="row">
                 <NavLink to = {`/register`}>
                 <button className="register"> 
                    
                            <p className="white">Register with Phone</p>  
                            <i className="fas fa-arrow-right white"></i> 
                </button>
                </NavLink>
            </div>
        </div>    
    </div>
    
)


export default home;