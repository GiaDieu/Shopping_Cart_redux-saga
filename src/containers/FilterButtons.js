import { connect } from "react-redux";
import FilterTag from "../components/FilterTag";
import { onToggleProduct } from "../actions/index";

const mapStateToProps = state => {
  return {
    products: state.FetchProducts,
    onToggleProduct,
    filterValue: state.FetchProducts.filterValue
  };
};

export default connect(mapStateToProps, { onToggleProduct })(FilterTag);
