import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './components/Home';
import Project from './components/Project';
import Meta from './components/Meta';
import FileNav from './components/FileNav';
import Hamburger from './components/Hamburger';
import '../scss/styles.scss';

const App = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () =>
        setIsNavOpen(!isNavOpen);
    return (
        <div className="site-wrapper">
            <FileNav active={isNavOpen} handleClick={toggleNav} />
            <div className="content-wrapper">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/meta' component={Meta} />
                    <Route path='/projects/:project' component={Project} />
                </Switch>
            </div>
            <Hamburger
                handleClick={toggleNav}
                active={isNavOpen}
            />
        </div>
    );
};

export default hot(module)(App);
