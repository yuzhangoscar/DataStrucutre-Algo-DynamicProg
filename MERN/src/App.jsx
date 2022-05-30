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
            <td style={style}>Issue row id = {props.id}</td>
        </div>
    )
}

const Element = 
    <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <IssueRow id={1} />
        <IssueRow id={2} />
        <hr />
        <IssueAdd />
    </div>;

ReactDOM.render(Element, document.getElementById('content'));