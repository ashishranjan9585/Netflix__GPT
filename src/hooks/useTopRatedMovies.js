import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.topratedMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/tv/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default useTopRatedMovies;