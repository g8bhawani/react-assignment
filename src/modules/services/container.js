import { connect } from "react-redux";

import Services from "./Services";
import { fetchServicesData } from "../../store/services/actions";
import { filterProvidersData } from "../../store/providers/actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.services,
});

const mapDisptachToProps = (dispatch, ownProps) => ({
  fetchServicesData: () => dispatch(fetchServicesData()),
  filterProvidersData: (service) => dispatch(filterProvidersData(service)),
});

export default connect(mapStateToProps, mapDisptachToProps)(Services);
