import React from 'react';
import Msec from './projects/Msec';

const Project = ({ match }) => {
    switch(match.params.project) {
        case 'msec':
            return <Msec />;
        default:
            return <Msec />;
    }
};

export default Project;
