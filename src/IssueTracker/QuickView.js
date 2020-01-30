import React from 'react';

const quickView = (props) => {
    return (
    <div className='quickView' issue={props.issue}>
        {props.children}
    </div>)
}

export default quickView;