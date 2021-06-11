import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);

const NavBar=(props)=>{
    return(
<div className="nav">
<FontAwesomeIcon icon="shopping-cart" className="cart"/>
<div className="cart-count">{props.count}</div>
</div>
    )
}
export default NavBar;