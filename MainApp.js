import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import IndexApp from '../components/IndexApp';
class MainApp extends React.Component{


render(){
    return(<div> 
    
          <Router>
          <Navbar />
              <Switch>
              <Route exact path="/" component={ IndexApp }/>
              </Switch>      
            </Router>
      
         </div>)
}

}

export default MainApp;