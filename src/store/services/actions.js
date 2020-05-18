import { REQUEST_SERVICES, RECEIVE_SERVICES } from "./actionTypes";

const request = () => ({
  type: REQUEST_SERVICES,
});

const receive = (value) => ({
  type: RECEIVE_SERVICES,
  value,
});

export const fetchServicesData = () => (dispatch) => {
  dispatch(request());
  fetch(`${process.env.REACT_APP_API_BASE}/services`)
    .then((res) => res.json())
    .then((body) => dispatch(receive(body.data)));
};
