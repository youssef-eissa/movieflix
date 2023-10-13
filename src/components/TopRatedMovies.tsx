import { Link } from "react-router-dom";
import { TopRatedProps,singleMovie ,FavouritesArray} from "../types/App"
import './TopRatedMovies.css'
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { resetMovie, getMovie } from "../redux/SingleMovie";
import Slider from "react-slick";
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavourite } from "../redux/Favourites";



type TTopMovies = {
    TopRatedMovies: TopRatedProps;
    title: string;
    favourites: FavouritesArray;

}
function TopRatedMovies({ TopRatedMovies, title,favourites }: TTopMovies) {
    const dispatch=useDispatch()
    function handleMoviePage(movie:singleMovie) {
        dispatch(resetMovie())
        dispatch(getMovie(movie))
    }
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
    breakpoint: 1700,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 3
    }
    }]

    }
    function handleFavourite(movie:singleMovie){
        dispatch(addFavourite(movie))
    }
 function handleMovie(movie:singleMovie){
        dispatch(resetMovie())
        dispatch(getMovie(movie))
    }
return (
    <div className="container-fluid mt-2">
        <div className="row">
            <div className="col-12 d-flex flex-column p-0 align-items-center">
                <h1 className="col-12 title text-center">{title}</h1>
                <div className="col-10 my-3">
                    <Marquee pauseOnHover={true} className="col-12 d-flex ">
                        {TopRatedMovies.map((movie: singleMovie) => {
                            return <Link key={movie.id} onClick={()=>handleMoviePage(movie)} reloadDocument to='/movie' className=" marqueeTitle col-12 me-5 text-center ">{ movie.original_title} </Link>
                        })}
                    </Marquee>
                </div>
                <div className="col-10 mt-5 movieContainer">
                    <Slider className="col-12" {...settings}>
                        {TopRatedMovies.map((movie: singleMovie) => {
                            return <div key={movie.id} className="col-12 d-flex justify-content-center movieContainer rounded " >
                                <div onClick={(e)=>handleMoviePage(movie)} className="col-11 d-flex position-relative overflow-hidden rounded topRatedImgBox">
                                    <img className="img-fluid h-100 w-100" alt="movie" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                    <div className="col-12 TopRatedFabInfo d-flex align-items-center justify-content-center position-absolute flex-column ">
                                        <Fab onClick={()=>handleFavourite(movie)} className="col-12  FabTopRated " sx={{backgroundColor:'white'}} aria-label="like">
                                    <FavoriteIcon sx={{color:favourites.includes(movie)?'crimson':'#DCDCDC',cursor:'pointer',transition:'0.3s'}} />
                                        </Fab>
                                        <Link onClick={()=>handleMovie(movie)} to='/movie' className="col-5 mt-3 text-center py-2 SlideMovieLink">Show Movie</Link>
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

export default TopRatedMovies