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
            <div className='col-12 d-flex justify-content-between p-0 '>
                <div className='logo col-4'>Movie<span>Flix</span></div>
                <div className='col-8 d-flex '>
                    <div className='col-2 d-flex align-items-center justify-content-center ms-auto'>
                        <Link reloadDocument to='/favourites'>
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