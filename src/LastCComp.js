import React, { Component } from 'react'
import './stylesNew.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';


export default class LastCComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
           <Router>
               <div>
                   <nav>
                       <ul>
                           <li>
                               <Link to='/'>Home</Link>
                               <Link to='/about'>About</Link>
                               <Link to='/users'>Users</Link>
                           </li>
                       </ul>
                   </nav>
                   
                   <Switch>
                       <Route path='/About'>
                         <About />
                       </Route>
                       <Route path='/Users'>
                           <Users />
                       </Route>
                       <Route path='/'>
                           <Home />
                       </Route>
                   </Switch>
               </div>
           </Router>
        )
    }
}
