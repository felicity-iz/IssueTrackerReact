import React from 'react';

class Form extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    users: [],
    labels: [],
    milestones:[],
    userSelection: '',
    title:'',
    description: '',
    labelsSelection: '',
    milestoneSelection: ''
    };

}

fetchUsers() {
    fetch('/users/').then(response => response.json())
        .then(data =>
        this.setState({
            users: data
        })
    )
}

fetchLabels() {
    fetch('/labels/').then(response => response.json())
        .then(data =>
        this.setState({
            labels: data
        })
    )
}

fetchMilestones() {
    fetch('/milestones/').then(response => response.json())
        .then(data =>
        this.setState({
            milestones: data
        })
    )
}

componentDidMount() {
    this.fetchUsers();
    this.fetchLabels();
    this.fetchMilestones();
}

myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});
}

clearForm = () => { 
    document.getElementById("newIssueForm").reset();
}   

addIssue = (data) => {
    fetch('/issues/new/', {
        method: 'POST',
        body: data
        }).then(
            (response)=>{
                if(response.status===200){
                    this.props.onRefresh()
                    this.clearForm()
                }
            }
    );
}

mySubmitHandler = (event) => {
    event.preventDefault();
    let userSelection = this.state.userSelection;
    let title = this.state.title;
    let description = this.state.description;
    let labelsSelection = this.state.labelsSelection;
    let milestoneSelection = this.state.milestoneSelection;
    /*console.log(
        "author: "+ userSelection + "\n",
        "title: "+ title + "\n",
        "description: "+ description + "\n",
        "labels: "+ labelsSelection + "\n",
        "milestone: "+ milestoneSelection 
    )*/

    const data = new FormData(event.target); 

    data.set('author', userSelection);
    data.set('title', title);
    data.set('description', description);
    data.set('labels', labelsSelection);
    data.set('milestone', milestoneSelection);

    this.addIssue(data);   
}

render() {
    return (      
    <form id="newIssueForm" onSubmit={this.mySubmitHandler}>
    <h1>New Issue</h1>
    <div>
        <label className="inputLabel">User:</label>        
        <select name="userSelection" onChange={this.myChangeHandler}>
        {this.state.users.length ? 
                this.state.users.map((user) =>
                <option value={user.id}>{user.username}</option>
                )
            : null}

        </select>
    </div>
    <div>
        <label className="inputLabel">Title:</label>
        <input
        type='text'
        name='title'
        onChange={this.myChangeHandler}
        />
    </div>
    <div>
        <label className="inputLabel">Description:</label>
        <textarea name="description" value={this.state.value} onChange={this.myChangeHandler} />
    </div>
    <div>
        <label className="inputLabel">Labels:</label>
        <select name="labelsSelection" value={this.state.value} onChange={this.myChangeHandler} >
            <option value="">none</option>
            {this.state.labels.length ? 
                this.state.labels.map((label) =>
                <option value={label.id}>{label.title}</option>
                )
            : null}
        </select>
    </div>
    <div>
        <label className="inputLabel">Milestones:</label>
        <select name="milestoneSelection" value={this.state.value} onChange={this.myChangeHandler}>
            <option value="">none</option>
            {this.state.milestones.length ? 
                this.state.milestones.map((milestone) =>
                <option value={milestone.id}>{milestone.title}</option>
                )
            : null}
        </select>
    </div>
    <input type='submit' />
    </form>
    );
}
}

export default Form;