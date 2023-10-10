import { Link } from "react-router-dom";
import { singleMovie } from "../types/App"
import './SingleMovie.css'


type TheMovie = {
movie:singleMovie
}
function SingleMovie({movie}:TheMovie) {

console.log(movie);

return (
    <div className='container vh-100'>
        <div className='row'>
            <div className='col-12 p-2 d-flex  justify-content-center'>
                <div className="col-6 p-0 d-flex flex-wrap  rounded overflow-hidden">
                    <Link reloadDocument to='/' className="col-12 mb-3" style={{textDecoration:'none', color:'gray'}}>Back to home</Link>
                    <img alt="movieImg" className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                </div>
                <div className="col-6 d-flex flex-column p-5 MovieInfo">
                    <h1 className="col-12">{movie.title}</h1>
                    <p className="col-12">{movie.overview}</p>
                    <span className="col-12 mb-3"> Language : {movie.original_language}</span>
                    <span className="col-12"> Released : {movie.release_date}</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default SingleMovie