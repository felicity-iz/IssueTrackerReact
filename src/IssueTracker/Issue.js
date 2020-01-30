import React from 'react';

const issue = (props) => {
    return (
    <div className='issueRow' data-id={props.issueId}>
        {props.children}
    </div>)
}

export default issue;