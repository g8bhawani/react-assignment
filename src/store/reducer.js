import { combineReducers } from "redux";

import services from "./services/reducer";
import providers from "./providers/reducer";

export default combineReducers({
  providers,
  services
});
