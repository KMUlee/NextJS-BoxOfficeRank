import Image from "next/image";
import { useDispatch } from "react-redux";
import { Movie } from "../typing";
import { setBannerMovie } from "../store/modules/bannerMovie";

interface Props {
  movie: Movie;
  movieCategory: string;
}

function Thumbnail({ movie, movieCategory }: Props) {
  const dispatch = useDispatch();

  const handleClick = (movieNm: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setBannerMovie(movieNm, movieCategory));
  };
  return (
    <div className="relative h-28  min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.otherDetails.backdrop_path || movie.otherDetails.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
        onClick={() => handleClick(movie.movieNm)}
      />
      <h1 className="absolute -top-1 text-shadow-xl text-5xl font-semibold md:text-7xl md:-top-2">
        {Number(movie.rank) < 4 ? movie.rank : ""}
      </h1>
    </div>
  );
}

export default Thumbnail;
