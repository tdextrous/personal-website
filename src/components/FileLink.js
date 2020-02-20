import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import '../../scss/FileLink.scss';

const FileLink = ({
    text,
    depth,
    url,
    handleClick
}) => (
    <NavLink
        to={url}
        onClick={handleClick}
        exact
        className="file-link"
        activeClassName="selected"
    >
        <span className="file-link__content" style={{paddingLeft: `${depth * 36}px`}}>
            <FontAwesomeIcon icon={faFile} />
            <span className="file-link__content__text">{text}.tjd</span>
        </span>
    </NavLink>
);

export default FileLink;
