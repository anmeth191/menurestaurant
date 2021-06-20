import React from 'react';
import { connect } from 'react-redux';


class App extends React.Component{
    state={
        appetizers:this.props.appetizers,
        sides:this.props.sides
    }

render(){
    return(
        <div className="menu">
            <div className="menu__container">
                <h1 className="bigTitle">Our Menu</h1>
                <div className="menu__container__appetizers">
                    <div className="menu__container__appetizers--item">
                        <h1 className="bigTitle">Appetizers</h1>
                        {  this.state.appetizers.map( (element) =>{
                       return( 
                           <div key={ element.id} className="menu__container__appetizers--item--container">
                           
                        <table className="tableDisplay">
                        <tbody className="tableDisplay__body">
                        <tr className="tableDisplay__body--row">
                           <td className="tableDisplay__body--row-data">{element.name}</td>
                           <td className="tableDisplay__body--row-data">{element.price}</td>
                         </tr>   
                        <tr className="tableDisplay__body--row"><td className="tableDisplay__body--row-data">{element.description}</td></tr>
                        </tbody>
                        </table>
                        
                        </div>  
                          )//end of the return
                        })//end of the map to look for the appetizers in the menu
                        }
                         </div>
                    </div>
                    {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                 <div className="menu__container__sides">
                 <div className="menu__container__sides--item">
                        <h1 className="bigTitle">Sides</h1>
                        {  this.state.sides.map( (element) =>{
                       return( 
                           <div key={ element.id} className="menu__container__sides--item--container">
                          <table className="tableDisplay">
                         <tbody className="tableDisplay__body">
                          <tr className="tableDisplay__body--row">
                           <td className="tableDisplay__body--row-data">{element.name}</td>
                           <td className="tableDisplay__body--row-data">{element.price}</td>
                         </tr>   
                        <tr className="tableDisplay__body--row"><td className="tableDisplay__body--row-data">{element.quantity} Pcs</td></tr>
                        </tbody>
                        </table>
                     
                        </div>  
                          )//end of the return
                        })//end of the map to look for the appetizers in the menu
                        }
                         </div>
                </div>
                </div>
            </div>
    )
}
}

const menuReducerProps = (state)=>{
    return {
        appetizers: state.appetizers ,
    sides: state.sides    }
}


export default connect(menuReducerProps)(App);