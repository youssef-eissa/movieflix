import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Popular from './components/Popular';
import SingleMovie from './components/SingleMovie';
import { useSelector} from 'react-redux'
import { singleMovie ,FavouritesArray} from './types/App'
import FavouritesPage from './components/FavouritesPage';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPopularMovies, fetchTopRatedMovies,fetchUpcomingMovies } from './ReactQuery/fetches';
import { TheMovie } from './types/App';

function App() {

  const TheMovie = useSelector<{ TheMovie: { movie: singleMovie } }>(state => state.TheMovie.movie)

  const Favourites = useSelector<{ FavouritesArray: { Favourites: singleMovie[] } }>(state => state.FavouritesArray?.Favourites)

  const {data:popularMovies,hasNextPage:PopularHasNextPage,isSuccess:popularMoviesSuccess,fetchNextPage:PopularfetchNextPage} = useInfiniteQuery(
    ['popularMovies'],
    fetchPopularMovies,
    {
      getNextPageParam: (_lastPage,pages) => {
        if (pages.length  < pages[0].data.total_pages) {
          return pages.length + 1
        } else return undefined
      },
    }
  )
  const popularMoviesArray = popularMovies?.pages.map(page => page.data.results)

  const {data:TopRatedMoviesData,hasNextPage:TopRatedHasNextPage,isSuccess:TopMoviesSuccess,fetchNextPage:TopRatedfetchNextPage} = useInfiniteQuery(
    ['TopRatedMovies'],
    fetchTopRatedMovies,
    {
      getNextPageParam: (_lastPage,pages) => {
        if (pages.length  < pages[0].data.total_pages) {
          return pages.length + 1
        } else return undefined
    }
    }
  )
  const TopRatedMoviesArray = TopRatedMoviesData?.pages.map(page => page.data.results)

  const {data:UpcomingMoviesData,hasNextPage:UpcomingHasNextPage,isSuccess:UpcomingMoviesSuccess,fetchNextPage:UpcomingfetchNextPage} = useInfiniteQuery(
    ['UpcomingMovies'],
    fetchUpcomingMovies,
    {
      getNextPageParam: (_lastPage,pages) => {
        if (pages.length  < pages[0].data.total_pages) {
          return pages.length + 1
        } else return undefined
    }
    }
  )
  const UpcomingMoviesArray = UpcomingMoviesData?.pages.map(page => page.data.results)


  return (
        <div style={{backgroundColor:'rgb(51, 51, 51)',color:'white',fontFamily:'Space Grotesk,sans-serif'}}>
      <NavBar favourites={Favourites as FavouritesArray}  />
      <Routes>
        <Route path='/' element={
          <Home >
            {popularMoviesSuccess && <Popular Movies={popularMoviesArray?.flat() as any} Title='Popular Movies' favourites={Favourites as FavouritesArray} hasNextPage={PopularHasNextPage as boolean} fetchNextPage={PopularfetchNextPage as any}  />}

            {TopMoviesSuccess && <TopRatedMovies favourites={Favourites as FavouritesArray} TopRatedMovies={TopRatedMoviesArray?.flat() as any} title='Top Rated Movies' hasNextPage={TopRatedHasNextPage as boolean} fetchNextPage={TopRatedfetchNextPage as any} />}

            {UpcomingMoviesSuccess&& <UpcomingMovies UpcomingMovies={UpcomingMoviesArray?.flat() as any} title='Upcoming Releases' favourites={Favourites as FavouritesArray}hasNextPage={UpcomingHasNextPage as boolean} fetchNextPage={UpcomingfetchNextPage as any}/>}
          </Home>}

        />
        <Route path='/movie/:movieName' element={<SingleMovie movie={TheMovie as singleMovie} />} />
        <Route path='/favourites' element={<FavouritesPage Favourites={Favourites as FavouritesArray} title='Favourites' />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
