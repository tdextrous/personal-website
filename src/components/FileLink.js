import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import '../../scss/FileLink.scss';

const FileLink = ({
    text,
    depth,
    selected
}) => (
    <div className={`file-link ${selected ? ' selected' : null}`}>
        <span className="file-link__content" style={{paddingLeft: `${depth * 36}px`}}>
            <FontAwesomeIcon icon={faFile} />
            <span className="file-link__content__text">{text}.tjd</span>
        </span>
    </div>
);

export default FileLink;
