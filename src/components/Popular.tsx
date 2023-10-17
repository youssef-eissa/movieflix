/* eslint-disable no-lone-blocks */
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
    fetchNextPage: () => void;
    hasNextPage: boolean;

}
function Popular({ Movies, Title, favourites,fetchNextPage,hasNextPage }: TPopularProps) {
    const dispatch = useDispatch()

    function handleMovie(movie:singleMovie):void{
        dispatch(resetMovie())
        dispatch(getMovie(movie))
        window.scrollTo({top:0,behavior:'smooth'})
    }
    function handleFavourite(movie:singleMovie){
        dispatch(addFavourite(movie))
    }

    const settings = {
    dots: false,
    speed: 500,
    infinite:false,
    responsive: [{
    breakpoint: 1700,
        settings: {
            arrows: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 1
    }
    },
    {
    breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        arrows: false,
        touchMove: true

    }
    },
    ]
    }


return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
                <h1 className="col-12 title text-center ">{Title}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 p-0 d-flex flex-column align-items-center justify-content-center mb-md-5">
                <div className="col-10 rounded overflow-hidden ">
                <Carousel effect="fade" dots={false} autoplay={true}>
                {Movies?.map((movie:singleMovie) => {
                    return <div key={movie.id} className="carouselBox col-12 position-relative">
                        <img alt="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid h-100 w-100 " />
                    <Link reloadDocument onClick={()=>handleMovie(movie)} className="col-md-2 col-6 rounded text-center py-2 position-absolute toMovie z-3" to={`/movie/${movie.original_title}`}>Show Film</Link>
                    </div>
                })}
                </Carousel>
                </div>
                <div className="col-10 my-4 my-md-0 mt-md-5">
                    <Slider className="col-12 " {...settings}>
                        {Movies?.map((movie:singleMovie) => {
                            return <div className="d-flex flex-column align-items-center col-12 justify-content-center" key={movie.id}>
                                <div className="col-11 col-md-10 imgBox position-relative  rounded overflow-hidden SlideMovieBox">
                                <img alt="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid h-100 w-100" />
                                <div className="col-12 SlideMovieInfo position-absolute d-none d-md-flex flex-column align-items-center justify-content-center">
                                <Fab onClick={()=>handleFavourite(movie)} className="col-12"  sx={{backgroundColor:'white'}} aria-label="like">
                                    <FavoriteIcon sx={{color:favourites.includes(movie)?'crimson':'#DCDCDC',cursor:'pointer',transition:'0.3s'}} />
                                    </Fab>
                                    <Link onClick={()=>handleMovie(movie)} to={`/movie/${movie.original_title}`} className="col-5 mt-3 text-center py-2 SlideMovieLink rounded">Show Movie</Link>
                                </div>
                                </div>
                                <div className="col-12 d-md-none mt-2 d-flex flex-column align-items-center justify-content-center">
                                    <Fab onClick={()=>handleFavourite(movie)} className="col-12 FabTopRated"  sx={{backgroundColor:'white'}} aria-label="like">
                                    <FavoriteIcon sx={{color:favourites.includes(movie)?'crimson':'#DCDCDC',cursor:'pointer',transition:'0.3s'}} />
                                    </Fab>
                                    <Link reloadDocument onClick={()=>handleMovie(movie)} to={`/movie/${movie.original_title}`} className="col-9 rounded mt-3 text-center py-2 SlideMovieLink">Show Movie</Link>
                                </div>
                            </div>
                        })}
                        <div >
                            <div className="col-12 showMoreBox d-flex align-items-center justify-content-center " >
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

export default Popular





