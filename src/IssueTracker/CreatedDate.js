import React from 'react';

const createdDate = (props) => {
    const homeLink = window.location.hostname;
    return (
        <div className="dateLink">
            <a href={homeLink}>
                {homeLink + ' '}
            </a>
            <span>&nbsp;on {props.issue.createdDate}</span>
        </div>)
}

export default createdDate;