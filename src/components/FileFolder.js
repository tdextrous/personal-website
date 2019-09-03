import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../scss/FileFolder.scss';

const FileFolder = ({
    text,
    depth,
    children
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const handleClick = () => setIsCollapsed(!isCollapsed);

    return (
        <>
        <div className="file-folder" onClick={handleClick}>
            <span className="file-folder__content" style={{paddingLeft: `${depth * 20}px`}}>
                <div className="icon-container icon-container--chevron">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        size="xs"
                        className={`file-folder__chevron${isCollapsed ? null : ' rotated'}`}
                    />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFolder} />
                </div>
                <span className="file-folder__content__text">{text}</span>
            </span>
        </div>
        {
            isCollapsed ?
            null
            :
            <div className="file-folder__children">
                {children}
            </div>
        }
        </>
    );
};

export default FileFolder;
