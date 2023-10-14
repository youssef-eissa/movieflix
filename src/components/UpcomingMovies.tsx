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
    favourites:FavouritesArray
}
function UpcomingMovies({ UpcomingMovies, title,favourites }: TUpcomingMoviesProps) {
    const dispatch=useDispatch()

    function handleFavourite(movie:singleMovie){
        dispatch(addFavourite(movie))
    }
    function handleMovie(movie:singleMovie){
        dispatch(resetMovie())
        dispatch(getMovie(movie))
    }
    
    const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    responsive: [{
    breakpoint: 1700,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        PauseOnHover: true,
        autoplaySpeed: 5000
    }
    }]
    }
return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 p-0 d-flex flex-column align-items-center">
                <h1 className="col-12 text-center title">{title}</h1>
                <div className="col-10 upcomgingSlider">
                    <Slider className="col-12 mt-5 d-flex" {...settings}>
                        {UpcomingMovies.map((movie: singleMovie) => {
                            return <div key={movie.id} className=" d-flex p-3 flex-column justify-content-center  UpcomingMovieBox">
                                <div className="col-12 h-75 d-flex flex-column rounded overflow-hidden">
                                    <img className="img-fluid h-100 w-10 " alt="MovieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                                </div>
                                <div className="col-12 mt-3 d-flex align-items-center">
                                    <div className="col-6">Releases : {movie.release_date}</div>
                                    <div className="col-6 d-flex p-2 justify-content-end ">
                                        <div className="col-4">
                                            <Fab onClick={()=>handleFavourite(movie)} className="col-12  FabTopRated " sx={{backgroundColor:'white'}} aria-label="like">
                                    <FavoriteIcon sx={{color:favourites.includes(movie)?'crimson':'#DCDCDC',cursor:'pointer',transition:'0.3s'}} />
                                        </Fab>
                                        </div>
                                        <Link onClick={()=>handleMovie(movie)} to='/movie' className='col-6 d-flex justify-content-center align-items-center upcomingSlideMovieLink'>Show Movie</Link>
                                    </div>
                                </div>
                            
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)
}

export default UpcomingMovies