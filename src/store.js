import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "444-444-4444",
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "333-333-333",
    },
  ],
};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
