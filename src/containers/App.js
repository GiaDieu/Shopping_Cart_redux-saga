import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import ProductsContainer from "./ProductsContainer";
import ProductFilters from "./ProductFilters";
import FilterButtons from "./FilterButtons";
import BasketContainer from "./BasketContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="container">
        <h1>E-Commerce Products</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <FilterButtons />
            <ProductFilters />
            <ProductsContainer />
          </div>
          <div className="col-md-4">
            <BasketContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = fetchProducts => {
  return {
    fetchProducts
  };
};
export default connect(mapDispatchToProps, { fetchProducts })(App);
