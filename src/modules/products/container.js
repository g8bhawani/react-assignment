import { connect } from "react-redux";

import Products from "./Products";
import { fetchProvidersData } from "../../store/providers/actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.providers,
});

const mapDisptachToProps = (dispatch, ownProps) => ({
  fetchProvidersData: () => dispatch(fetchProvidersData()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Products);
