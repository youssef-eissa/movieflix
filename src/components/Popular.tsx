import { Link } from "react-router-dom";
import { PopularProps } from "../types/App"
import './Popular.css'
import { Carousel } from 'antd';
import { useDispatch } from "react-redux";
import { getMovie,resetMovie } from "../redux/SingleMovie";

type TPopularProps = {
    Movies: PopularProps;
    Title: string;

}
function Popular({ Movies, Title }: TPopularProps) {
    const dispatch = useDispatch()


    function handleMovie(movie:React.MouseEvent<HTMLButtonElement>){
        dispatch(resetMovie())
        dispatch(getMovie(movie))
    }

return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
                <h1 className="col-12 title text-center ">{Title}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 p-0 d-flex justify-content-center mb-5">
                <div className="col-10 rounded overflow-hidden ">
                <Carousel effect="fade" dots={false} autoplay={true}>
                {Movies.map((movie:any) => {
                    return <div key={movie.id} className="carouselBox col-12 position-relative">
                        <img alt="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid h-100 w-100 " />
                    <Link reloadDocument onClick={()=>handleMovie(movie)} className="col-2 text-center py-2 position-absolute toMovie z-3" to='/movie'>Show Film</Link>
                    </div>
                })}
                </Carousel>
                </div>
            </div>
        </div>
    </div>
)
}

export default Popular


