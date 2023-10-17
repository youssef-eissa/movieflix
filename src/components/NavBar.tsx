import './NavBar.css'
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavouritesArray } from '../types/App';
import { Link } from 'react-router-dom';

type TNavBarProps={
    favourites:FavouritesArray
}
function NavBar({favourites}:TNavBarProps) {

return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 p-2 p-md-0 d-flex justify-content-between  '>
                <div className='logo d-flex align-items-center justify-content-center col-md-4 col-6'>Movie<span>Flix</span></div>
                <div className='col-md-7 col-6 d-flex p-2 '>
                    <div className='col-md-5 col-12 d-flex align-items-center justify-content-md-end ms-md-auto '>
                        <Link reloadDocument className='col-md-4 col-7 text-center ToContact' to='/contact'>Contact Us</Link>
                        <Link className='col-md-2 col-5 text-center' reloadDocument to='/favourites'>
                        <Badge badgeContent={favourites.length} color="primary">
                <FavoriteIcon sx={{'&:hover':{color:'crimson'},color:'white',cursor:'pointer',transition:'0.3s'}} fontSize='large' color="action" />
                    </Badge></Link>
                    </div>
                </div>
            </div>
</div>
    </div>
)
}

export default NavBar