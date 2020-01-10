import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} Items Found</div>
        <div className="col-md-4">
          <label>
            Order By
            <select
              className="form-control"
              defaultValue={this.props.sort}
              onChange={this.props.onHandleSort}
            >
              <option value="">Select</option>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </label>
        </div>

        <div className="col-md-4">
          <label>
            Filter Size
            <select
              className="form-control"
              value={this.props.size ? this.props.size : ""}
              onChange={this.props.onHandleSize}
            >
              <option value="">All</option>
              <option value="x">X</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
