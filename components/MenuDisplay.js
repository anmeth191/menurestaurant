import React from 'react';
import { connect } from 'react-redux';


class MenuDisplay extends React.Component{


 lookMenu(){
  const { element } = this.props.match.params;
  console.log(this.props.elements[element]);
 }   

componentDidMount(){
    this.lookMenu();
}

render(){
 return(
        <div style={{color:'black'}}>Hello from the menu display </div>
    )
}

}


const setMenuToProps = (state)=>{
    return{
        elements: state
       }
}

export default connect(setMenuToProps)(MenuDisplay);