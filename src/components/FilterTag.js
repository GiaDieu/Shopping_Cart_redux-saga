import React from "react";

const FilterTag = props => {
  const { items } = props.products;
  return (
    <div>
      <button
        className="btn btn-warning"
        style={{ margin: "10px" }}
        onClick={() => props.onToggleProduct("all", items)}
      >
        Products
      </button>
      <button
        className="btn btn-warning"
        onClick={() => props.onToggleProduct("free", items)}
      >
        Products with Free Ship
      </button>
    </div>
  );
};

export default FilterTag;
