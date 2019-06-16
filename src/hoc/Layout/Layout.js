import React from 'react'
import './Layout.scss';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Footer from './../../components/Footer/Footer';
import './Layout.scss';
const layout = (props) =>(
    <div className = "Layout">
        <>
      
        <Toolbar/>
        
                {props.children}
    
        <Footer/>
      
        
        </>
    </div>
  
)

export default layout;