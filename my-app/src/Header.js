import React from 'react';
import './index.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalPrice:0,
            totalItem:0
        };
    }
    render() {
        return (
            <div>
                shopping cart: {this.state.totalPrice}; {this.state.totalItem} items
            </div>
        )
    }
};

export default Header;