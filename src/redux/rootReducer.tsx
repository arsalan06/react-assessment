import { combineReducers } from "redux";
import userReducer from "./userSlice";
// @ts-ignore
import storage from "redux-persist/lib/storage";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};
const rootReducer = combineReducers({
  userReducer,
  // Add other reducers here
});

export { rootPersistConfig, rootReducer };
