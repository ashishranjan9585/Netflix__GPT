import { useEffect } from "react";
import { API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";



const  useNowPlayingMovies  = () => {
    const dispatch  = useDispatch();

    const  nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies) ;
    const  getNowPlayingMovies = async () => {
    const  data = await fetch(MOVIE_URL , API_OPTIONS);
    const json = await data.json();
    //console.log(json);
    dispatch(addNowPlayingMovies(json.results));

    };

    useEffect(() => {
        !nowPlayingMovies 
        
        &&
        getNowPlayingMovies();
    } , []) ;
}

export default useNowPlayingMovies;