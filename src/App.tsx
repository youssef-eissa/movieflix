import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useGetPopularMoviesQuery,useGetTopRatedMoviesQuery } from './redux/MoviesAPI';
import Home from './components/Home';
import Popular from './components/Popular';
import SingleMovie from './components/SingleMovie';
import { useSelector } from 'react-redux'
import { singleMovie ,FavouritesArray} from './types/App'
import FavouritesPage from './components/FavouritesPage';
import TopRatedMovies from './components/TopRatedMovies';




function App() {
  const { data: popularMovies, isSuccess:popularMoviesSuccess } = useGetPopularMoviesQuery(null)
  const TheMovie = useSelector<{ TheMovie: { movie: singleMovie } }>(state => state.TheMovie.movie)
  const {data:TopMovies,isSuccess:TopRatedMoviesSuccess}=useGetTopRatedMoviesQuery(null)
  const Favourites = useSelector<{FavouritesArray:{Favourites:singleMovie[]}}>(state=>state.FavouritesArray?.Favourites)


  return (
    <div style={{backgroundColor:'rgb(51, 51, 51)',color:'white',fontFamily:'Space Grotesk,sans-serif'}}>
      <NavBar favourites={Favourites as FavouritesArray}  />
      <Routes>
        <Route path='/' element={
          <Home >
          {popularMoviesSuccess && <Popular Movies={popularMovies.results} Title='Popular Movies' favourites={Favourites as FavouritesArray} />}
          {TopRatedMoviesSuccess && <TopRatedMovies favourites={Favourites as FavouritesArray}  TopRatedMovies={ TopMovies.results} title='Top Rated Movies' />}
          </Home>}
        />
        <Route path='/movie' element={<SingleMovie movie={TheMovie as singleMovie} />} />
        <Route path='/favourites' element={<FavouritesPage Favourites={Favourites as FavouritesArray} title='Favourites' />} />
      </Routes>
  </div>
  );
}

export default App;
