import React from "react";
import { hot } from 'react-hot-loader';

import '../scss/styles.scss';

const App = () => {
    return (
        <div className="heading">
            Hello React!
        </div>
    );
};

export default hot(module)(App);
