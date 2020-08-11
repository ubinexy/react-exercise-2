import React, { Component } from 'react';
import './App.scss';
import Categories from './Categories';

class App extends Component {
  state = {
    cart: 0,
    products: [
      {
        category: 'iphone',
        products: [
          {
            name: 'iphone11',
            price: '5999',
          },
          {
            name: 'iphoneXS',
            price: '5399',
          },
          {
            name: 'iphoneSE',
            price: '3599',
          },
        ],
      },
      {
        category: 'HUAWEI',
        products: [
          {
            name: 'HUAWEI P40 Pro+',
            price: 7999,
          },
          {
            name: 'HUAWEI Mate 30',
            price: 5000,
          },
          {
            name: 'HUAWEI nova 7',
            price: 4000,
          },
        ],
      },
    ],
  };

  addToCart = () => {
    this.setState((prevState) => ({
      ...prevState.products,
      cart: prevState.cart + 1,
    }));
  };

  render() {
    return (
      <main className="app">
        <header>
          <span>Store</span>
          <span>{this.state.cart}</span>
        </header>
        <Categories category={this.state.products} onClick={this.addToCart} />
      </main>
    );
  }
}

export default App;
