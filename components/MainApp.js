import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import IndexApp from '../components/IndexApp';
import Footer  from './Footer';
import MenuA from './MenuA';
class MainApp extends React.Component{


render(){
    return(<div> 
    
          <Router>
            <Navbar />
              <Switch>
              <Route exact path="/" component={ IndexApp }/>
              <Route path="/menu" component={ MenuA} />
              </Switch>
              <Footer />      
            </Router>
      
         </div>)
}

}

export default MainApp;