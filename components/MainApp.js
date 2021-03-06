import React from 'react';
import { HashRouter, Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import IndexApp from '../components/IndexApp';
import Footer  from './Footer';
import MenuA from './MenuA';
import MenuDisplay from './MenuDisplay';
import MailingList from './MailingList';
import AboutUs from './AboutUs';
import ContactComponent from './ContactComponent';
import ResponsiveMenu from './responsiveMenu';
class MainApp extends React.Component{


render(){
    return(<div> 
    
          <HashRouter>
            <Navbar />
            <ResponsiveMenu />
              <Switch>
              <Route exact path="/" component={ IndexApp }/>
              <Route path="/menu" component={ MenuA} />
              <Route path="/menudisplay/:element" component={MenuDisplay}/>
              <Route path="/mailinglist" component={ MailingList } />
              <Route path="/aboutus" component={ AboutUs } />
              <Route path="/contact" component={ ContactComponent } />
              </Switch>
              <Footer />      
            </HashRouter>
      
         </div>)
}

}

export default MainApp;