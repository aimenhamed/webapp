import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/home';
import Login from '../Login/Login';
import Register from '../Register/Register';

import createUserSession from '../../userSession'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : false,
        }
    }

    // this method will be called on userSession updates
    userSessionUpdate = () => {
        this.forceUpdate();
    }
    render() { 
        
        // create a userSession and pass an update method
        let userSession = createUserSession(this.userSessionUpdate);
        // let database = setupDatabase();
        // setTimeout(()=>{console.log(database.getIngredients())},2000)
        return (
            <Router>
                <Navbar userSession={userSession}/>
                <Switch>
                    <Route exact path="/"><Home items={this.state.ingItems}/></Route>
                    <Route path="/login"><Login userSession={userSession}/></Route>
                    <Route path="/register"><Register userSession={userSession}/></Route>
                </Switch>              
            </Router>
        );
    }
}
 
export default Main;