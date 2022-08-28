import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "redux";
import BannerMovie, { bannerMovie } from "./bannerMovie";

const rooteReducer = combineReducers({ BannerMovie });

export type ReducerType = ReturnType<typeof rooteReducer>;

export default rooteReducer;
