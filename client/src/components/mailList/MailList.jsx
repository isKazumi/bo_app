import './mailList.css';

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Hemat waktu, hemat uang!</h1>
            <span className="mailDesc">Daftar dan kami akan mengirimkan penawaran terbaik untuk Anda</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
