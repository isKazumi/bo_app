import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Pendapatan</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
                </div>
                <p className="title">Total penjualan yang dilakukan hari ini</p>
                <p className="amount">Rp 12,293,286</p>
                <p className="desc">Pemrosesan transaksi sebelumnya. Pembayaran terakhir mungkin tidak disertakan.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">Rp1204k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Minggu lalu</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">Rp1204k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Bulan lalu</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">Rp1200k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
