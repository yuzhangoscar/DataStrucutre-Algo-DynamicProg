const IssueFilter = () =>{
    return (
        <div>
            Placeholder for IssueFilter
        </div>
    )
};

const ClickButton = () => {
    return (
        <div>
            <p>Clicked</p>
        </div>
    );
}

const element = <div>
    <IssueFilter />
    <ClickButton />
</div>;

ReactDOM.render(element, document.getElementById('content'));