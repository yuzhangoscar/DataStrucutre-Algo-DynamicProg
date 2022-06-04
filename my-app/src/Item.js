import React from 'react';
import './App.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: this.props.icon,
            price: this.props.price,
            total: 0
        }
    }

    add() {
        this.setState({
            
        });
    }

    render() {
        return (
            <div className='product'>
                <span role = 'img'>{this.state.icon}</span>
                {this.state.price}
                <button>Add</button>
                <button>Remove</button>
            </div>
        )
    }
}

export default Item;