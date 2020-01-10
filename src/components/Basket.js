import React from "react";

class Basket extends React.Component {
  render() {
    return (
      <div className="alert alert-dismissible alert-success">
        {this.props.basketList.length === 0 ? (
          "The Cart is empty"
        ) : (
          <div>
            You have {this.props.basketList.length} items in the basket.
          </div>
        )}
        {this.props.basketList.length > 0 && (
          <div>
            <ul>
              {this.props.basketList.map(item => (
                <li key={item.description}>
                  <b>{item.title} </b>
                  Volumes {item.quantity} = {item.price} x {item.quantity}
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.onHandleRemoveCart(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            total :
            {this.props.basketList
              .reduce((a, c) => a + c.price * c.quantity, 0)
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
