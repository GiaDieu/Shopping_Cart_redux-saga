import { connect } from "react-redux";
import FilterProducts from "../components/FilterProducts";
import { filterSize, filterPrice } from "../actions";

const mapStateToProps = state => {
  return {
    Products: state.FetchProducts,
    filterSize
  };
};

export default connect(mapStateToProps, { filterSize, filterPrice })(
  FilterProducts
);
