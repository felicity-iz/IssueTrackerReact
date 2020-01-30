import React, { Component } from 'react';
import QuickView from './QuickView';
import CreatedDate from './CreatedDate';
import RowWrapper from './RowWrapper';
import Status from './Status';
import Title from './Title';
import LabelLink from './LabelLink';

class rowTitle extends Component {

state = {
    showQuickview : false
}

mouseEnterHandler = () => {
    this.setState({showQuickview : true});
}

mouseLeaveHandler = () => {
    this.setState({showQuickview : false});
}


render() {
    let quickView = null;
    
    if(this.state.showQuickview === true){
        quickView = (<QuickView>
                        <CreatedDate/>
                    </QuickView>)
    }

    //TODO: make labellink version without link
    return (
        <div>
            <a target="_blank" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler} className='rowTitle'href={'http://127.0.0.1:5000/issues/'+this.props.issue.issueId}>
                {this.props.issue.title}       
            </a>
            {this.state.showQuickview?
            <QuickView issue={this.props.issue}>
                <CreatedDate issue={this.props.issue}/>
                <RowWrapper issue={this.props.issue}>
                    <Status status={this.props.issue.status}/>
                    <Title link={'/'+this.props.issue.issueId} title={this.props.issue.title}/>
                </RowWrapper>
                <p className="issueId">#{this.props.issue.issueId}</p>
                <p className="description">{this.props.issue.description}</p>
                <RowWrapper issue={this.props.issue}>
                {this.props.issue.labels.map(label => {
                        return (
                        <LabelLink labelId={label.labelId} labelTitle={label.title}/>
                        )
                })}
                </RowWrapper>
            </QuickView>
            :null}
        </div>)
    }
}  

export default rowTitle;