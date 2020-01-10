import React from "react";
import ProductItem from "./ProductItem";

class Products extends React.Component {
  render() {
    const RenderList = this.props.Products.map(item => {
      return (
        <div className="col-md-4" key={item.id}>
          <div className="thumbnail text-center">
            <ProductItem
              handleAddToCart={this.props.handleAddToCart}
              product={item}
            />
          </div>
        </div>
      );
    });

    return <div className="row">{RenderList}</div>;
  }
}

export default Products;
