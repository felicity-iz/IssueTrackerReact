import React from 'react';

const title = (props) => {
    return (
    <div>
        <a className='rowTitle'href={props.link}>
            {props.title}       
        </a> 
    </div>
    )
}

export default title;