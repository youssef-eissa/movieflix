import { TheMovie,singleMovie,FavouritesArray } from "../types/App"
import Slider from "react-slick";
import './UpcomingMovies.css'
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavourite } from "../redux/Favourites";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetMovie, getMovie } from "../redux/SingleMovie";


type TUpcomingMoviesProps = {
    UpcomingMovies: TheMovie;
    title: string;
    favourites: FavouritesArray;
    hasNextPage: boolean;
    fetchNextPage: () => void;
}
function UpcomingMovies({ UpcomingMovies, title,favourites,hasNextPage,fetchNextPage }: TUpcomingMoviesProps) {
    const dispatch=useDispatch()

    function handleFavourite(movie:singleMovie){
        dispatch(addFavourite(movie))
    }
    function handleMovie(movie:singleMovie){
        dispatch(resetMovie())
        dispatch(getMovie(movie))
        window.scrollTo({top:0,behavior:'smooth'})

    }

    const settings = {
    dots: false,
    autoplay: true,
    infinite: false,
    speed: 1000,
    responsive: [{
    breakpoint: 1700,
        settings: {
        touchMove: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        PauseOnHover: true,
        autoplaySpeed: 5000,
    }
    }]
    }
return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 p-0 d-flex flex-column align-items-center mb-2">
                <h1 className="col-12 text-center title">{title}</h1>
                <div className="col-md-10 col-12 upcomgingSlider">
                    <Slider className="col-12 mt-5 " {...settings}>
                        {UpcomingMovies.map((movie: singleMovie) => {
                            return <div key={movie.id} className=" d-flex p-3 flex-column justify-content-center UpcomingMovieBox">
                                <div className="col-12 h-75 d-flex flex-column rounded overflow-hidden">
                                    <img className="img-fluid h-100 w-10 " alt="MovieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                                </div>
                                <div className="col-12 mt-3 d-flex flex-column flex-md-row align-items-center">
                                    <div className="release col-md-6 col-12">Releases : {movie.release_date}</div>
                                    <div className="col-md-6 col-12 flex-column flex-md-row d-flex  p-2 justify-content-end ">
                                        <div className="col-md-4 d-flex justify-content-center justify-content-md-start col-12">
                                            <Fab onClick={()=>handleFavourite(movie)} className="col-12 mb-2 mb-md-0 FabTopRated " sx={{backgroundColor:'white'}} aria-label="like">
                                    <FavoriteIcon  sx={{color:favourites.includes(movie)?'crimson':'#DCDCDC',cursor:'pointer',transition:'0.3s'}} />
                                        </Fab>
                                        </div>
                                        <Link reloadDocument onClick={()=>handleMovie(movie)} to={`/movie/${movie.original_title}`} className='col-md-6 py-2 py-md-1 col-12 d-flex justify-content-center rounded align-items-center upcomingSlideMovieLink'>Show Movie</Link>
                                    </div>
                                </div>

                            </div>
                        })}
                        <div>
                            <div className=" col-10 mt-md-4 rounded d-flex align-items-center justify-content-center upComingMoviesShowMore " >
                        <button disabled={!hasNextPage} onClick={fetchNextPage} className="col-md-6 col-9 showMore p-2 rounded">Show more...</button>
                        </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)
}

export default UpcomingMovies