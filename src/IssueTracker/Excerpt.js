import React from 'react';

const excerpt = (props) => {
    const desc = props.issue.description;
    return (
    <p>
        {desc.substr(1,250)}
    </p>)
}

export default excerpt;