import React from 'react';
import '../../scss/FileNav.scss';
import FileLink from './FileLink';
import FileFolder from './FileFolder';

const FileNav = ({ active, handleClick }) => {
    return (
        <div className={`file-nav${active ? ' active' : ''}`}>
            <div className="file-nav__title-container">
                <h2 className="file-nav__title">Site Directory</h2>
            </div>
            <div className="file-nav__link-container">
                <FileFolder text="projects">
                    <FileLink text="mountainStatesElectrical" url="/projects/msec" depth={1} handleClick={handleClick} />
                    <FileLink text="veazee" url="/projects/veazee" depth={1} handleClick={handleClick} />
                </FileFolder>
                <FileLink text="home" url="/" handleClick={handleClick} />
                <FileLink text="meta" url="/meta" handleClick={handleClick} />
            </div>
        </div>
    );
}

export default FileNav;
