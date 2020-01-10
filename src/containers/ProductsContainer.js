import { connect } from "react-redux";
import Products from "../components/Products";
import { handleAddToCart } from "../actions/index";

const getVisibleProducts = (items, filteredItems) => {
  return filteredItems.length === 0 ? items : filteredItems;
};
const mapStateToProps = state => {
  return {
    Products: getVisibleProducts(
      state.FetchProducts.items,
      state.FetchProducts.filteredItems
    ),
    size: state.FetchProducts.size,
    sortValue: state.FetchProducts.sortValue,
    handleAddToCart
  };
};

export default connect(mapStateToProps, { handleAddToCart })(Products);
