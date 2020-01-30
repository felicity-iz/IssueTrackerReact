import React from 'react';

const infoRow = (props) => {
    return (
        <div className='infoRow'>#{props.issue.issueId} opened on {props.issue.createdDate} by {props.issue.author.userName}</div>
    )
}

export default infoRow;