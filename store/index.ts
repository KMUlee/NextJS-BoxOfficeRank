import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, createStore, Store } from "redux";
import { bannerMovie } from "./modules/bannerMovie";
import rooteReducer, { ReducerType } from "./modules";

const makeStore = (context: Context) => createStore(rooteReducer);

export const wrapper = createWrapper<Store<ReducerType>>(makeStore, {
  debug: true,
});
