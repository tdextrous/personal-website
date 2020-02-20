import React from 'react';
import '../../scss/Hamburger.scss';

const Hamburger = ({
    handleClick,
    active
}) => {
    return (
        <div id="js-hamburger" className={`hamburger__container${active ? ' active' : ''}`} onClick={handleClick}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
        </div>
    )
}

export default Hamburger;
