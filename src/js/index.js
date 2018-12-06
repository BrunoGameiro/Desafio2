import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Navbar";

render(
    <Provider store={store}>
        <Router>
            <div>
            <Nav/>
            <switch>
                <Route exact path='/app' component={App}></Route>
                <Route exact path='/' component={Home}></Route>
            </switch>
            </div>
        </Router>
    </Provider>,document.getElementById("app")
);