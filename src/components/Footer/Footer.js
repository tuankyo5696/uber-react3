import React from 'react';
import './Footer.scss';
import logoFB from './../../assets/img/logo-fb.png'
import logoIn from './../../assets/img/logo-in.png'
import logoYT from './../../assets/img/logo-youtube.png'
const  footer = (props) => (
    <footer className= "Footer">
                        <div className="group1"> 
                                <p className="text"> © 2019 Uber Technologies Inc. All Rights Reserved. </p>
                                <p className="text">Terms of Use | Legal Notices | Privacy & Security</p>
                        </div>
                        <div className= "group2">
                                 <div className="imgLogo">
                                        <img src={logoFB} alt= "logofb"/>
                                 </div>
                                 <div className="imgLogo">
                                        <img src={logoIn} alt= "logoin"/>
                                 </div>
                                 <div className="imgLogo">
                                        <img src={logoYT} alt="logoyt"/>
                                 </div>
                                
                                
                                
                        </div>
    </footer>
)

export default footer;