const IssueFilter = (props) =>{
    console.log(props.countries);
    return (
        <div>
            {props.countries.map(countr => <p key={countr}>hello {countr}</p>)}
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
    <IssueFilter countries={[`a`, `b`, `c`, `d`]}/>
    <ClickButton />
</div>;

ReactDOM.render(<IssueFilter countries={[`a`, `b`, `c`, `d`]}/>, document.getElementById('content'));