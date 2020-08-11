import React, { Component } from 'react';
import './App.scss';
import Categories from './Categories';

class App extends Component {
  state = {
    cart: 0,
    products: [
      {
        category: 'iPhone',
        products: [
          {
            name: 'iPhone11',
            price: '5999',
          },
          {
            name: 'iPhoneXS',
            price: '5399',
          },
          {
            name: 'iPhoneSE',
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
          <h1>Store</h1>
          <div>
            <i className="material-icons md-18">shopping_cart</i>
            <span>{this.state.cart}</span>
          </div>
        </header>
        <Categories category={this.state.products} onClick={this.addToCart} />
      </main>
    );
  }
}

export default App;
