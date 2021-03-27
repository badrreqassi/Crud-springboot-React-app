import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import AddUser from './ADDuser';


import ListUser from './Listuser';
import Navbar from './navBar';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Router>

                <Navbar/>
                <Route path="/" exact component={ListUser}></Route>
                <Route path="/adduser" component={AddUser}></Route>





                </Router>
            </div>
         );
    }
}
 
export default User;