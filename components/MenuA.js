import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MenuA extends React.Component{

    state={
        appetizers:this.props.appetizers,
        sides:this.props.sides
    }

render(){
    return(
  <div className="menu">

          <div className="menu__container"> 
            <div className="menu__container__appetizers">  
            <div className="hoverContainer">
                <Link to="/appetizers">
                <h1 className="titleMenu">Appetizers</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__soupSalads"> 
            <div className="hoverContainer">
                <Link to="/soupSalads">
                <h1 className="titleMenu">Soup & Salads</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__pizza">
            <div className="hoverContainer">
                <Link to="/pizza">
                <h1 className="titleMenu">Pizza</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__gourmetPizza">
            <div className="hoverContainer">
                <Link to="/gourmetPizza">
                <h1 className="titleMenu">Gourmet Pizza</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__calzoneStromboli">
            <div className="hoverContainer">
                <Link to="/calzonesStromboli">
                <h1 className="titleMenu">Calzones & Stromboli</h1>
                </Link>
                </div>     
           </div>
            <div className="menu__container__pasta"> 
            <div className="hoverContainer">
                <Link to="/pasta">
                <h1 className="titleMenu">Pastas</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__bakedDishes"> 
            <div className="hoverContainer">
                <Link to="/bakedDishes">
                <h1 className="titleMenu" style={{fontSize:"2.5rem"}}>Baked Dishes</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__entrees"> 
            <div className="hoverContainer">
                <Link to="/entrees">
                <h1 className="titleMenu">Entrees</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__burgerChicken"> 
            <div className="hoverContainer">
                <Link to="/chickenBurgers">
                <h1 className="titleMenu">Chicken Burgers</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__superBurgers">
            <div className="hoverContainer">
                <Link to="/superBurgers">
                <h1 className="titleMenu">Super Burgers</h1>
                </Link>
                </div>    
            </div>
            <div className="menu__container__hotSubs"> 
            <div className="hoverContainer">
                <Link to="/hotsubs">
                <h1 className="titleMenu">Hot Subs</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__coldSubs">  
            <div className="hoverContainer">
                <Link to="/coldsubs">
                <h1 className="titleMenu">Cold Subs</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__wraps"> 
            
            <div className="hoverContainer">
                <Link to="/wraps">
                <h1 className="titleMenu">Wraps</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__kidsMenu">
            <div className="hoverContainer">
                <Link to="/kids">
                <h1 className="titleMenu">For Kids</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__desserts">
            <div className="hoverContainer">
                <Link to="/dessert">
                <h1 className="titleMenu"> Desserts</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__beverages">
            <div className="hoverContainer">
                <Link to="/appetizers">
                <h1 className="titleMenu">Beverages</h1>
                </Link>
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

export default connect(menuReducerProps)(MenuA);