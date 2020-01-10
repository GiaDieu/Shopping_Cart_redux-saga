import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div>
      <a href={`#${product.id}`}>
        <img src={`/images/${product.sku}_2.jpg`} alt={product.title} />
        <p>{product.title}</p>
      </a>
      <div>
        <b>{product.price.toFixed(2)}</b>
        <button
          className="btn btn-primary"
          onClick={() => props.handleAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
