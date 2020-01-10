import React from "react";

class Basket extends React.Component {
  render() {
    return (
      <div className="alert alert-dismissible alert-success">
        {this.props.cartItems.length === 0 ? (
          "the Cart is empty"
        ) : (
          <div>You have {this.props.cartItems.length} items in the basket.</div>
        )}
        {this.props.cartItems.length > 0 && (
          <div>
            <ul>
              {this.props.cartItems.map(item => (
                <li key={item.description}>
                  <b>{item.title} </b>
                  Volumes {item.count} = {item.price} x {item.count}
                  <button
                    className="btn btn-danger"
                    onClick={e => this.props.onHandleRemoveCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            total :
            {this.props.cartItems
              .reduce((a, c) => a + c.price * c.count, 0)
              .toFixed(2)}
            $
            <br />
            <button
              className="btn btn-primary"
              onClick={() => alert("Check Out need to be implemented...")}
            >
              Check Out
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Basket;
