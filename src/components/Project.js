import React from 'react';
import Msec from './projects/Msec';
import Veazee from './projects/Veazee';
import Github from './projects/Github';
import Codepen from './projects/Codepen';


const Project = ({ match }) => {
    switch(match.params.project) {
        case 'msec':
            return <Msec />;
        case 'veazee':
            return <Veazee />;
        case 'github':
            return <Github />;
        case 'codepen':
            return <Codepen />;
        default:
            return <Msec />;
    }
};

export default Project;
