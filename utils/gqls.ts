import { gql } from "@apollo/client";

export const DailyBoxOffice = gql`
  query getMovies {
    dailyBoxOffice {
      rank
      movieNm
      openDt
      audiAcc
      otherDetails {
        vote_average
        vote_count
        poster_path
        backdrop_path
        overview
      }
    }
  }
`;

export const WeeklyBoxOffice = gql`
  query getMovies {
    weeklyBoxOffice {
      rank
      movieNm
      openDt
      audiAcc
      otherDetails {
        vote_average
        vote_count
        poster_path
        backdrop_path
        overview
      }
    }
  }
`;

export const ForeignBoxOffice = gql`
  query getMovies {
    foreignBoxOffice {
      rank
      movieNm
      openDt
      audiAcc
      otherDetails {
        vote_average
        vote_count
        poster_path
        backdrop_path
        overview
      }
    }
  }
`;

export const KoreanBoxOffice = gql`
  query getMovies {
    koreanBoxOffice {
      rank
      movieNm
      openDt
      audiAcc
      otherDetails {
        vote_average
        vote_count
        poster_path
        backdrop_path
        overview
      }
    }
  }
`;
