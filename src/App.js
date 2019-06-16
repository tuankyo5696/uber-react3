import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import RegisterPage from './containers/registerPage';
import HomePage from './containers/homePage';
import BookPage from './containers/BookPage';
import UberWorkPage from './containers/UberWorkPage';
class App extends Component{
  
  state= {
    fullname : ''
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('fullname')){
      const fullname = localStorage.getItem('fullname')

      this.setState({
       fullname
      })
   
    }
  
  }
  

  renderRedirect =  () => {
    if(this.state.fullname){
      return <Redirect to = '/book' />
    }
  }
  render(){

      
    return(
      <div>
         <Layout>
            <Switch>
            <Route path = "/book" component = {BookPage}/>
            <Route path="/register" component = {RegisterPage}/> 
            <Route path = "/uberwork" component = {UberWorkPage}/>
              {this.renderRedirect()}
            <Route path = "/" exact component = {HomePage} />
          
            </Switch>
        
         </Layout> 
      </div>
    )
  }
} 
 

export default App;
