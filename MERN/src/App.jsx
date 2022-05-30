const IssueFilter = () =>{
    return (
        <div>
            This is a placeholder for the issue filter
        </div>
    )
};

const IssueTable = () =>{
    return (
        <div>
            This is a placeholder for the issue table
        </div>
    )
};

const IssueAdd = () =>{
    return (
        <div>
            This is a placeholder for the issue add
        </div>
    )
};

const IssueRow = (props) => {
    const style = {border: "1px solid silver", padding: 4};
    return (
        <div>
            <td style={style}>{props.children}</td>
        </div>
    )
}

const Element = 
    <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <IssueRow>ISSUE ROW id = 1</IssueRow>
        <IssueRow>ISSUE ROW id = 2</IssueRow>
        <hr />
        <IssueAdd />
    </div>;

ReactDOM.render(Element, document.getElementById('content'));