import React from 'react';
import '../../scss/FileNav.scss';
import FileLink from './FileLink';
import FileFolder from './FileFolder';

const FileNav = () => {
    return (
        <div className="file-nav">
            <div className="file-nav__title-container">
                <h2 className="file-nav__title">Site Directory</h2>
            </div>
            <div className="file-nav__link-container">
                <FileLink text="home" selected/>
                <FileFolder text="projects">
                    <FileLink text="mountainStatesElectrical" depth={1} />
                    <FileLink text="veazee" depth={1} />
                    <FileLink text="github" depth={1} />
                    <FileLink text="codepen" depth={1} />
                </FileFolder>
                <FileFolder text="externalLinks">
                    <FileLink text="github" depth={1} />
                    <FileLink text="codepen" depth={1} />
                    <FileLink text="linkedIn" depth={1} />
                </FileFolder>
            </div>
        </div>
    );
}

export default FileNav;
