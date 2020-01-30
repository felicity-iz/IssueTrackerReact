import React from 'react';

const milestone = (props) => {
    return (
    <div className='milestone'>
        <svg aria-label="Milestone" class="octicon octicon-milestone" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z"></path>
        </svg>
        {props.milestone}
    </div>
    )
}

export default milestone;