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

const Element = 
    <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
    </div>;

ReactDOM.render(Element, document.getElementById('content'));