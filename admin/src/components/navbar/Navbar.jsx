import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        Indonesia
                    </div>
                    <div className="item" style={{ cursor: 'pointer' }}>
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: 'TOGGLE' })} />
                    </div>
                    <Link to="/users/single">
                        <div className="item">
                            <h3>{user.username}</h3>
                        </div>
                    </Link>
                    <div className="item">
                        <img src={user.img} alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
