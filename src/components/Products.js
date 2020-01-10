import React from "react";
import { CurrencyFormat } from "../CurrencyFormat";
class Products extends React.Component {
  render() {
    const renderList = this.props.items.map(item => {
      return (
        <div className="col-xs-12 col-sm-4 col-md-4" key={item.id}>
          <div className="thumbnail text-center">
            <a
              href={`#${item.id}`}
              onClick={e => this.props.handleAddToCart(e, item)}
            >
              <img alt={item.title} src={`/images/${item.sku}_2.jpg`} />
              <p>{item.title}</p>
            </a>
            <div>
              <b>{CurrencyFormat(item.price)}</b>
              <button
                className="btn btn-primary"
                onClick={e => this.props.handleAddToCart(e, item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-danger"
              onClick={() => this.props.onUpdateFilterValue("all")}
            >
              Products
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-danger"
              onClick={() => this.props.onUpdateFilterValue("free")}
            >
              Products with Free Ship
            </button>
          </div>
        </div>
        <hr />
        <div className="row">{renderList}</div>
      </div>
    );
  }
}

export default Products;
