interface otherDetails {
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface Movie extends otherDetails {
  rank: string;
  movieNm: string;
  openDt: string;
  audiAcc: string;
  otherDetails: otherDetails;
}
