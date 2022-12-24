import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Cari..." />
                    <SearchOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
