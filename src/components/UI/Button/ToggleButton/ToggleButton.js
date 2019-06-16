import React from 'react'
import './ToggleButton.scss';
import buttonToggle from './../../../../assets/img/button-toggle.png';
const toggleButton = (props) => (
    <div>
        <button className="toggleButton" type="button" 
                            data-toggle="dropdown" data-target="#navbarToggleExternalContent" 
                            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={buttonToggle} alt="Toggle"/>  
        </button>
    </div>
)

export default toggleButton;
