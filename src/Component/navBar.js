import React,{Component} from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="navbar">
            <nav>
                <ul>

                    <li>
               <Link style={{color:" white" }} to="/"> Menu </Link>  
                    </li>
                    <li>
               <Link style={{color:" white" }} to="/adduser">  Add User </Link>  
                  
                    </li>

                </ul>
            </nav>
                </div> );
    }
}
 
export default Navbar;