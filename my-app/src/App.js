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
      <div>
            {Products.map(product => (<Item icon={product.icon} price={product.price}/>))}
      </div>
    </div>
  );
}

export default App;
