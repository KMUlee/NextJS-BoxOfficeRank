import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../store/modules";
import { Movie } from "../typing";

interface Props {
  dailyBoxOffice: Movie[];
  weeklyBoxOffice: Movie[];
  koreanBoxOffice: Movie[];
  foreignBoxOffice: Movie[];
}

function Banner({
  dailyBoxOffice,
  weeklyBoxOffice,
  koreanBoxOffice,
  foreignBoxOffice,
}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { BannerMovie } = useSelector<ReducerType, ReducerType>(
    (state) => state
  );

  useEffect(() => {
    if (BannerMovie.movieNm === null) {
      setMovie(
        dailyBoxOffice[Math.floor(Math.random() * dailyBoxOffice.length)]
      );
    } else {
      if (BannerMovie.movieCategory === "Daily BoxOffice") {
        setMovie(
          dailyBoxOffice.filter(
            (movie) => movie.movieNm === BannerMovie.movieNm
          )[0]
        );
      } else if (BannerMovie.movieCategory === "Weekly BoxOffice") {
        setMovie(
          weeklyBoxOffice.filter(
            (movie) => movie.movieNm === BannerMovie.movieNm
          )[0]
        );
      } else if (BannerMovie.movieCategory === "Weekly Korean BoxOffice") {
        setMovie(
          koreanBoxOffice.filter(
            (movie) => movie.movieNm === BannerMovie.movieNm
          )[0]
        );
      } else if (BannerMovie.movieCategory === "Weekly Foreign BoxOffice") {
        setMovie(
          foreignBoxOffice.filter(
            (movie) => movie.movieNm === BannerMovie.movieNm
          )[0]
        );
      }
    }
  }, [dailyBoxOffice, BannerMovie.movieNm]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie?.otherDetails.backdrop_path || movie?.otherDetails.poster_path
          }`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold lg:max-w-lg">
        {movie?.movieNm}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-xl lg:text-2xl">
        {movie?.otherDetails.overview.substring(0, 300)}
      </p>
    </div>
  );
}

export default Banner;
