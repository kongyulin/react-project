import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './view/Home'
import Detial from './view/Detial'
import App from './view/App'
import Login from './view/Login'
import Register from './view/Register'
import Admin from './view/Admin'
import Users from './view/Users'
import Newdetial from './component/home/Newdetial'


class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path='/' component={App}></Route>
                    <Route exact path='/' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/detial' component={Detial}></Route>
                    <Route path='/users' component={Users}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/newdetial' component={Newdetial}></Route>
                   
                </HashRouter>
            </div>
        );
    }
}

export default Router;