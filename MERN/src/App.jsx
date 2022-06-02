const issues = [{id:1, title: 'a'},{id:2, title: 'b'},{id:3, title:'c'}];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue filter.</div>
        );
    }
}
class IssueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {issues: issues};
    }
    render() {
        return (
            <table className="bordered-table">
                <tbody>
                    {this.state.issues.map(issue => <IssueRow key={issue.id} issue_id={issue.id} issue_title={issue.title}/>)}
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.issue_title}</td>
                <td>{this.props.issue_id}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for a form to add an issue.</div>
        );
    }
}
class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
            <h1>Issue Tracker</h1>
            <IssueFilter />
            <hr />
            <IssueTable />
            <hr />
            <IssueAdd />
            </React.Fragment>
        );
    }
}
    
const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));