import React,{Component} from 'react';

import './Toolbar.scss';
import Logo from './../../Logo/Logo';
import ToggleButton from './../../UI/Button/ToggleButton/ToggleButton';

class Toolbar extends Component {
    state = {
        auth: '',
    }
    componentWillMount(){
        const auth = JSON.parse(localStorage.getItem('auth'))
        if(auth !== null){
            const fullname = auth.fullname;
            this.setState({
                auth: fullname
            })
            console.log(this.state.auth)
        }
        // const imageURL = localStorage.getItem('image')
        // this.setState({
        //   imageURL
        // })
        // console.log(imageURL);
   
    }
    render(){
        return (
            <header className = "Toolbar" >
            <div className="Logo">
                <Logo/>
            </div>
            <div>
                <p>{this.state.auth}    </p>
            </div>
            <div className="ToggleButton">
                <ToggleButton/>
            </div>
       
    
        </header>
        )
    }
}
export default Toolbar;