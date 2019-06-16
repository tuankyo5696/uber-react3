import React from 'react';
import uberLogo from '../../assets/img/logo-uber.png';
import './Logo.scss';

const logo = (props) => (
    <div className = "Logo" style = {{height: props.height}}>
            <img src = {uberLogo}  alt = "MyUber"/>  
    </div>
)

export default logo;