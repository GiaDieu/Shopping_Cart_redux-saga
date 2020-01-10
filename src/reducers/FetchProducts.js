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
} from "../actions/Type";

const INITIAL_STATE = {
  items: [],
  filteredItems: [],
  basketCart: []
};
const FetchApi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };

    case REQUEST_PRODUCTS:
      return { ...state, loading: false, items: [] };

    case REQUEST_PRODUCTS_SUCCESS:
      return { ...state, items: action.data, loading: false };

    case REQUEST_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        errors: true,
        items: []
      };

    case FILTER_SIZE:
      return {
        ...state,
        filteredItems: action.Products.filter(
          a => a.availableSizes.indexOf(action.size.toUpperCase()) >= 0
        ),
        size: action.size
      };

    case FILTER_PRICE:
      if (action.sort !== "") {
        return {
          ...state,
          filteredItems: action.Products.sort((a, b) =>
            action.sort === "lowest"
              ? a.price > b.price
                ? 1
                : -1
              : a.price < b.price
              ? 1
              : -1
          ),
          sortValue: action.sort
        };
      } else {
        return {
          ...state,
          filteredItems: action.Products.sort((a, b) => (a.id > b.id ? 1 : -1)),
          sortValue: action.sort
        };
      }

    case FILTER_PRODUCT:
      if (action.filterName === "all") {
        return {
          ...state,
          filteredItems: action.items,
          filterValue: action.filterName
        };
      } else {
        return {
          ...state,
          filteredItems: action.items.filter(item => item.isFreeShipping),
          filterValue: action.filterName
        };
      }

    case ADD_TO_CART:
      let addedItem = state.items.find(item => item.id === action.basket.id);
      let existedItem = state.basketCart.find(
        item => item.id === action.basket.id
      );
      if (existedItem) {
        addedItem.quantity += 1;
        return { ...state, basketCart: [...state.basketCart] };
      } else {
        addedItem.quantity = 1;
        return {
          ...state,
          basketCart: [...state.basketCart, addedItem]
        };
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        basketCart: state.basketCart.filter(
          basketItem => basketItem.id !== action.id
        )
      };
    default:
      return state;
  }
};

export default FetchApi;
