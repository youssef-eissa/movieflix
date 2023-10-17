import { Link } from "react-router-dom";
import { singleMovie } from "../types/App"
import './SingleMovie.css'
import Rating from '@mui/material/Rating';



type TheMovie = {
movie:singleMovie
}
function SingleMovie({movie}:TheMovie) {

console.log(movie);

return (
    <div className='container min-vh-100'>
        <div className='row'>
            <div className='col-12 p-2 d-flex  justify-content-center'>
                <div className="col-6 rounded overflow-hidden p-0 d-flex flex-wrap   ">
                    <Link reloadDocument to='/' className="col-3 mb-0 d-flex align-self-start" style={{textDecoration:'none', color:'gray'}}>Back to home</Link>
                    <div className="col-10 rounded overflow-hidden">
                        <img alt="movieImg" className="img-fluid w-100 h-100 " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                </div>
                </div>
                <div className="col-6 d-flex flex-column p-5 MovieInfo">
                    <h1 className="col-12">{movie.title}</h1>
                    <p className="col-12">{movie.overview}</p>
                    <span className="col-12 mb-3"> Language : {movie.original_language}</span>
                    <span className="col-12"> Released : {movie.release_date}</span>
                    <div className="col-12 mt-2">
                        <Rating name="customized-10" precision={0.5} defaultValue={movie.vote_average} max={10} readOnly />

                    </div>
                    <div className="col-12 mt-5 rounded overflow-hidden">
                        <img className="img-fluid w-100 h-100" alt="backdropImg" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SingleMovie