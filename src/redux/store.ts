import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userSigninReducer } from "./reducers/authReduceer";
import { userListReducer } from "./reducers/usersDataReducer";
const states = localStorage.getItem("usersdata");
const initialstate: any = {
  userLists: {
    users: states ? JSON.parse(states) : [],
  },
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  userSignIn: userSigninReducer,
  userLists: userListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export const store = createStore(
  reducer,
  initialstate,
  composeEnhancer(applyMiddleware(...middleware))
);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
