import React from 'react';
import {Link} from 'react-router-dom'

const NavBar =()=>{
    return(
        <div>
    <nav>
    <div className="nav-wrapper white">
      < Link to="/" className="brand-logo left "><i class="material-icons">book</i>Guest Book</Link>
      <ul id="nav-mobile" className="right ">
        <li ><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
       <li><Link to="/CreateMessage">Create Message</Link></li>
      </ul>
    </div>
  </nav>
  </div>

    )
}
export default NavBar;