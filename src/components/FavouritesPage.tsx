import { FavouritesArray, singleMovie } from "../types/App"
import './favouritesPage.css'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { filteredFavouritesArray } from "../redux/Favourites";
import { useDispatch } from "react-redux";


type TFavouritesPageProps = {
    Favourites: FavouritesArray;
    title:string
}
function FavouritesPage({ Favourites, title }: TFavouritesPageProps) {
    const dispatch=useDispatch()
    function handleDeleteMovie(movie: singleMovie) {
        const filteredFavourites = Favourites.filter((DeletedMovie: singleMovie) => {
            return DeletedMovie.id !== movie.id
        })
        dispatch(filteredFavouritesArray([...filteredFavourites]))
    }

return (
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex p-0 flex-column align-items-center min-vh-100 favouritesContainer ">
                <Link reloadDocument to='/' className="col-12 mb-3" style={{textDecoration:'none', color:'gray'}}>Back to home</Link>
                <h1 className="col-12 text-center">{title}</h1>
                {Favourites.length>0?Favourites.map((movie: singleMovie) => {
                    return <div key={movie.id} className="col-11 mt-5 d-flex ">
                        <div className="col-4 rounded overflow-hidden">
                            <img alt="img" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="img-fluid" />
                        </div>
                        <div className="col-6 d-flex flex-column p-2">
                            <h2 className="col-12">{movie.title}</h2>
                            <p className="col-12">{movie.overview}</p>
                            <div className="col-12 mt-2">
                                <Rating name="customized-10" precision={0.5} defaultValue={movie.vote_average} max={10} readOnly />
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <IconButton onClick={() => handleDeleteMovie(movie)} sx={{color:'crimson','&:hover':{color:'red'}}} aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>
                    }):<div className="col-12 d-flex align-items-center justify-content-center emptyFavourites">No Favourites Yet...</div>}
    </div>
        </div>

    </div>
)
}

export default FavouritesPage