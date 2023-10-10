import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useGetPopularMoviesQuery } from './redux/PopularMovies';
import Home from './components/Home';
import Popular from './components/Popular';
import SingleMovie from './components/SingleMovie';
import { useSelector } from 'react-redux'
import { singleMovie } from './types/App'




function App() {
  const { data: popularMovies, isSuccess } = useGetPopularMoviesQuery(null)
  const TheMovie = useSelector<{ TheMovie: { movie: singleMovie } }>(state => state.TheMovie.movie)
  

  return (
    <div style={{backgroundColor:'rgb(51, 51, 51)',color:'white'}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home >
          {isSuccess&&<Popular Movies={popularMovies.results}  Title='Popular Movies' />}
        </Home>} />
        <Route path='/movie' element={<SingleMovie movie={TheMovie as singleMovie}/> } />
      </Routes>
  </div>
  );
}

export default App;
