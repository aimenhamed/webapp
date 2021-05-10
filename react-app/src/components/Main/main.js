import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/home';
import Login from '../Login/Login';
import Register from '../Register/Register';


class Main extends Component {

    render() { 
        

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/register"><Register/></Route>
                </Switch>              
            </Router>
        );
    }
}
 
export default Main;