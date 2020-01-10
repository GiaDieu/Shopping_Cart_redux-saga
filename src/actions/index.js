import {
  FETCH_PRODUCTS,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  FILTER_SIZE,
  FILTER_PRICE,
  FILTER_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART
} from "./Type";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS
  };
};

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  };
};

export const requestProductsSuccess = data => {
  return {
    type: REQUEST_PRODUCTS_SUCCESS,
    data
  };
};

export const requestProductsError = () => {
  return {
    type: REQUEST_PRODUCTS_ERROR
  };
};

export const filterSize = (Products, size) => {
  return {
    type: FILTER_SIZE,
    Products,
    size
  };
};

export const filterPrice = (Products, sort) => {
  return {
    type: FILTER_PRICE,
    Products,
    sort
  };
};

export const onToggleProduct = (filterName, items) => {
  return {
    type: FILTER_PRODUCT,
    filterName,
    items
  };
};

export const handleAddToCart = basket => {
  localStorage.setItem("basket", JSON.stringify(basket));
  return {
    type: ADD_TO_CART,
    basket
  };
};

export const onHandleRemoveCart = id => {
  return {
    type: DELETE_FROM_CART,
    id
  };
};
