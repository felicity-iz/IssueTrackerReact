import React from 'react';

const rowWrapper = (props) => {
    return (
    <div className='rowWrapper'>
        {props.children}
    </div>)
}

export default rowWrapper;