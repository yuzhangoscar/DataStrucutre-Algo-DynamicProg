import Header from './Header';
import Item from './Item';
import './App.css';
import React from 'react';

const Products = [
    {
      icon: '🍦',
      price: 3
    },
    {
      icon: '🍩',
      price: 4
    },
    {
      icon: '🍉',
      price: 5
    }

];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItem: 0,
      totalPrice: 0
    }
  }
  render() {
    return (
      <div className="App">
        <Header totalPrice = {this.state.totalPrice} totalItem = {this.state.totalItem}/>
        {Products.map(product => (<Item className="product" key={product.icon} icon={product.icon} price={product.price}/>))}
      </div>
    );
  }
}

export default App;
