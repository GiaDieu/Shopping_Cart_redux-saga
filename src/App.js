import React from "react";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

class App extends React.Component {
  state = {
    filteredProduct: [],
    products: [],
    filter: "all",
    cartItems: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => {
        this.setState({ filteredProduct: data, products: data });
      });
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  onUpdateFilterValue = valueName => {
    this.setState({ filter: valueName });
  };

  onHandleSort = sortValue => {
    this.setState({ sort: sortValue.target.value });
    this.listProduct();
  };

  onHandleSize = sortValue => {
    this.setState({ size: sortValue.target.value });
    this.listProduct();
  };

  listProduct = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.price > b.price ? 1 : -1));
      }

      if (state.size !== "") {
        return {
          filteredProduct: state.products.filter(
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }
      return { filteredProduct: state.products };
    });
  };

  handleAddToCart = (e, product) => {
    this.setState(state => {
      let productInCart = false;
      state.cartItems.forEach(item => {
        if (product.id === item.id) {
          productInCart = true;
          item.count++;
        }
      });
      if (!productInCart) {
        state.cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return state.cartItems;
    });
  };

  onHandleRemoveCart = (e, item) => {
    this.setState(state => {
      const newCartItems = state.cartItems.filter(elem => elem.id !== item.id);
      localStorage.setItem("cartItems", newCartItems);
      return { cartItems: newCartItems };
    });
  };
  render() {
    const filterValue = this.state.filter;
    let newList = [];
    if (filterValue === "all") {
      newList = [...this.state.filteredProduct];
    } else if (filterValue === "free") {
      newList = this.state.filteredProduct.filter(
        filters => filters.isFreeShipping
      );
    }
    return (
      <div className="container">
        <h1>E-commerce Shopping Cart</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter
              sort={this.state.sort}
              size={this.state.size}
              onHandleSort={this.onHandleSort}
              onHandleSize={this.onHandleSize}
              count={newList.length}
            />
            <hr />
            <Products
              items={newList}
              handleAddToCart={this.handleAddToCart}
              onUpdateFilterValue={this.onUpdateFilterValue}
            />
          </div>
          <div className="col-md-4">
            <Basket
              cartItems={this.state.cartItems}
              onHandleRemoveCart={this.onHandleRemoveCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
