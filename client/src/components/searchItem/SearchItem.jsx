import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}m dari pusat</span>
                <span className="siTaxiOp">Taksi bandara gratis</span>
                <span className="siSubtitle">Dengan Kolam Renang dan Tempat Santai</span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">gratis pembatalan </span>
                <span className="siCancelOpSubtitle">Anda dapat membatalkan nanti, jadi dapatkan harga yang bagus hari ini!</span>
            </div>
            <div className="siDetails">
                {item.rating && (
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                )}
                <div className="siDetailTexts">
                    <span className="siPrice">Rp.{item.cheapestPrice}</span>
                    <span className="siTaxOp">Termasuk pajak dan biaya</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">Lihat</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
