import React from "react";
import './Navbar.css';
import{Link} from 'react-router-dom'
function Navigation(){
   return(
    <div>
     <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact">Courses</Link>
        </li>
      </ul>
    </nav>
    </div>
   );
}
export default Navigation;