import React from 'react';
import './index.css';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                shopping cart: {this.props.totalPrice}; {this.props.totalItem} items
            </div>
        )
    }
};

export default Header;