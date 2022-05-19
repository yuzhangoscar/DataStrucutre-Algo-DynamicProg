class IssueFilter extends React.Component {
    render() {
        return (
            <div>
                Placeholder for IssueFilter
            </div>
        )
    }
}
class IssueTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow />
                    <IssueRow />
                </tbody>
            </table>
        )
    }
}
class IssueAdd extends React.Component {
    render() {
        return (
            <div>
                Placeholder for IssueAdd
            </div>
        )
    }
}
class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <IssueTable />
                <IssueAdd />
            </div>
        )
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));