import { Movie } from "../typing";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ movies, title }: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="flex scrollbar-hide items-center space-x-0.5 md:space-x-2.5 md:p-2 overflow-auto">
        {movies.map((movie) => (
          <Thumbnail key={movie.movieNm} movie={movie} movieCategory={title} />
        ))}
      </div>
    </div>
  );
}

export default Row;
