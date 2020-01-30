import React from 'react';


class labelLink extends React.Component {
constructor(props) {
    super(props);    
}

handleClick = (e) => {
    e.preventDefault();
    this.props.onQuery(this.props.labelId)

}

render() {
    return (
    <a className={'labelLink label'+this.props.labelId} onClick={this.handleClick} >
        {this.props.labelTitle}
    </a>)
}
}

export default labelLink;