import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Issue from './IssueTracker/Issue';
import Status from './IssueTracker/Status';
import LabelLink from './IssueTracker/LabelLink';
import TitlewithQuickView from './IssueTracker/TitlewithQuickView';
import RowWrapper from './IssueTracker/RowWrapper';
import Form from './IssueTracker/Form';
import DeleteButton from './IssueTracker/DeleteButton';
import InfoRow from './IssueTracker/InfoRow';
import CommentCount from './IssueTracker/CommentCount';
import Milestone from './IssueTracker/Milestones';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
    this.fetchIssues = this.fetchIssues.bind(this);   
  }

  fetchIssues() {
    //console.log('fetching new issues')
    fetch('/issues').then(response => response.json())
      .then(data =>  
        this.setState({
          issues: data
        })
        
    )
  }


  queryIssuesLabel(labelId) {
    fetch('/issues?label='+labelId).then(
      response => response.json())
      .then(data =>  
        this.setState({
          issues: data
        }))
  }

  queryIssuesStatus(status) {
    fetch('/issues?status='+status).then(
      response => response.json())
      .then(data =>  
        this.setState({
          issues: data
        }))
  }

  /*setIssues() {
    this.setState({
      issues:data
    })
  }*/

  componentDidMount() {
    this.fetchIssues();
 }

  render() {
    return (
      <div className="App">
        {this.state.issues.map(issue => {
            return (<Issue issueId={issue.issueId}>
                      <RowWrapper issue={issue}>                       
                        <Status status={issue.status} tooltip onQuery={p=>{this.queryIssuesStatus(p)}}/>
                        <TitlewithQuickView issue={issue}/> 
                        {issue.labels.map(label => {
                          return (
                          <LabelLink labelId={label.labelId} labelTitle={label.title} onQuery={p=>{this.queryIssuesLabel(p)}}/>
                          )
                        })}
                        {issue.commentCount > 1?
                          <CommentCount commentCount={issue.commentCount}/>
                        : null}
                        <DeleteButton issueId={issue.issueId} onRefresh={p=>{this.fetchIssues(p)}}/>
                      </RowWrapper>   
                      <RowWrapper>
                        <InfoRow issue={issue}/>
                        {issue.milestone > 1?
                        <Milestone milestone={issue.milestone}/>
                        : null}
                      </RowWrapper>
                    </Issue>)
        })}
        <Form onRefresh={p=>{this.fetchIssues(p)}}/>
      </div>
    );
  }
}

export default App;
