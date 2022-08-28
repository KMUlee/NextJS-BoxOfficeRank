import { AnyAction } from "redux";

const SET_BANNER_MOVIE = "SET_BANNER_MOVIE";

export interface bannerMovie {
  movieNm: string | null;
  movieCategory: string | null;
}

export const setBannerMovie = (movieNm: string, movieCategory: string) => ({
  type: SET_BANNER_MOVIE,
  movieNm,
  movieCategory,
});

const initialState: bannerMovie = {
  movieNm: null,
  movieCategory: null,
};

const BannerMovie = (state: bannerMovie = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_BANNER_MOVIE:
      return {
        ...state,
        movieNm: action.movieNm,
        movieCategory: action.movieCategory,
      };
    default:
      return state;
  }
};

export default BannerMovie;
