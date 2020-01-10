import React from "react";

const FilterProducts = props => {
  const { items } = props.Products;
  const { filteredItems } = props.Products;
  return (
    <div>
      <div className="col-md-4">
        {filteredItems.length === 0 ? items.length : filteredItems.length} Items
        Found
      </div>
      <div className="col-md-4">
        <label>
          Order By
          <select
            className="form-control btn btn-default"
            onChange={e => props.filterPrice(items, e.target.value)}
          >
            <option value="">Select</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Sort By Size
          <select
            className="form-control btn btn-default"
            onChange={e => props.filterSize(items, e.target.value)}
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
};
export default FilterProducts;
