import { connect } from "react-redux";
import Basket from "../components/Basket";
import { onHandleRemoveCart } from "../actions/index";

const mapStateToProps = state => {
  return {
    basketList: state.FetchProducts.basketCart,
    onHandleRemoveCart
  };
};

export default connect(mapStateToProps, { onHandleRemoveCart })(Basket);
