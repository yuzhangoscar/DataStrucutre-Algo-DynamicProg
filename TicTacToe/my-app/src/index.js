import { createNullProtoObjWherePossible } from 'ejs/lib/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Statement extends React.Component {
    render() {
        return <h1>hello, {this.props.name}</h1>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return <h1> {this.state.date.toLocaleDateString()} </h1>
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <button className="square" onClick={() => {this.setState({value: 'X'});}}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
    const status = 'Next player: X';

    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        </div>
    );
    }
}

class Game extends React.Component {
    render() {
    return (
        <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
            <Statement name='hi' />
            <Clock />
        </div>
    );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
