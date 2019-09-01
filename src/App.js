import React from "react";
import { hot } from 'react-hot-loader';
import Home from './components/Home';
import FileNav from './components/FileNav';
import '../scss/styles.scss';

const App = () => {
    return (
        <div className="site-wrapper">
            <FileNav />
            <div className="content-wrapper">
                <Home />
            </div>
        </div>
    );
};

export default hot(module)(App);
