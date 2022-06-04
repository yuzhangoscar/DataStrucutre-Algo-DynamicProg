import Header from './Header';
import Item from './Item';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Header/>
      {Products.map(product => (<Item className="product" key={product.icon} icon={product.icon} price={product.price}/>))}
    </div>
  );
}

export default App;
