import React from 'react';
import './index.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: this.props.icon,
            price: this.props.price
        }
    }
    render() {
        return (
            <div>
                {this.state.icon}
                {this.state.price}
                <button>Add</button>
                <button>Remove</button>
            </div>
        )
    }
}

export default Item;