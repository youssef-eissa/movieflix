import { Link } from "react-router-dom";
import { TheMovie,FavouritesArray, singleMovie } from "../types/App"
import './Popular.css'
import { Carousel } from 'antd';
import { useDispatch } from "react-redux";
import { getMovie, resetMovie } from "../redux/SingleMovie";
import Slider from "react-slick";
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavourite } from "../redux/Favourites";



type TPopularProps = {
    Movies: TheMovie;
    Title: string;
    favourites: FavouritesArray;

}
function Popular({ Movies, Title, favourites }: TPopularProps) {
    const dispatch = useDispatch()

    function handleMovie(movie:singleMovie){
        dispatch(resetMovie())
        dispatch(getMovie(movie))
    }
    function handleFavourite(movie:singleMovie){
        dispatch(addFavourite(movie))
    }
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [{
    breakpoint: 1700,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 3
    }
    }]

    }

return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
                <h1 className="col-12 title text-center ">{Title}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 p-0 d-flex flex-column align-items-center justify-content-center mb-5">
                <div className="col-10 rounded overflow-hidden ">
                <Carousel effect="fade" dots={false} autoplay={true}>
                {Movies.map((movie:singleMovie) => {
                    return <div key={movie.id} className="carouselBox col-12 position-relative">
                        <img alt="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid h-100 w-100 " />
                    <Link reloadDocument onClick={()=>handleMovie(movie)} className="col-2 text-center py-2 position-absolute toMovie z-3" to='/movie'>Show Film</Link>
                    </div>
                })}
                </Carousel>
                </div>
                <div className="col-10 mt-5">
                    <Slider className="col-12  "  {...settings}>
                    {Movies.map((movie:singleMovie) => {
                        return <div key={movie.id} className="col-12 d-flex justify-content-center">
                            <div className="col-9 position-relative SlideMovieBox">
                                <img alt="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" />
                                <div className="col-12 SlideMovieInfo position-absolute d-flex flex-column align-items-center justify-content-center">
                                <Fab onClick={()=>handleFavourite(movie)} className="col-12"  sx={{backgroundColor:'white'}} aria-label="like">
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

export default Popular


