import {
  REQUEST_PROVIDERS,
  RECEIVE_PROVIDERS,
  FILTER_PROVIDERS,
} from "./actionTypes";

const request = () => ({
  type: REQUEST_PROVIDERS,
});

const receive = (value) => ({
  type: RECEIVE_PROVIDERS,
  value,
});

const filter = (value) => ({
  type: FILTER_PROVIDERS,
  value,
});

export const fetchProvidersData = () => (dispatch) => {
  dispatch(request());
  fetch(
    `${process.env.REACT_APP_API_BASE}/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10`
  )
    .then((res) => res.json())
    .then((body) => dispatch(receive(body.data)));
};

export const filterProvidersData = (service) => (dispatch, getState) => {
  const { allItems } = getState().providers;
  // filter items by service
  if (service === "") {
    dispatch(filter(allItems));
  } else {
    const filteredItems = allItems.filter((item) => {
      return item.attributes.subspecialties.indexOf(service) > -1;
    });
    dispatch(filter(filteredItems));
  }
};
