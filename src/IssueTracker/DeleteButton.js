import React from 'react';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);    
      }
  
deleteIssue = () => {
    fetch('/issues/delete/'+this.props.issueId, {
        method: 'POST'
      }).then(
          (response)=>{
            if(response.status===200){
                this.props.onRefresh()
            }
          }
    );
}

handleClick = (e) => {
    e.preventDefault();
    this.deleteIssue()

}

    
render() {
    return (<a className="deleteButton" data-id={this.props.issueId} onClick={this.handleClick}>
        &#128473;
        </a>
    )
}
}

export default DeleteButton;