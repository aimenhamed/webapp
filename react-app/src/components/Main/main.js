import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/home';
import Test from '../Test/Test';


class Main extends Component {

    render() { 
        

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/test"><Test/></Route>
                </Switch>              
            </Router>
        );
    }
}
 
export default Main;