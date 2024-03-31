import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch) ;

      //Fetch Data from TMDB API and update store 
      useNowPlayingMovies();
      usePopularMovies();
      useTopRatedMovies();
    return (
      <div>
        <Header />
        {
          showGptSearch ? ( <GptSearch /> ) : (
          <>
            <MainContainer />
          <SecondaryContainer />
           </>
       ) }
        
        
      </div>
    )
  }
  
  export default Browse;