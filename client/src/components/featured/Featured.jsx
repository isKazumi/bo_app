import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
    const { data, loading } = useFetch('/hotels/countByCity?cities=banjarmasin,banjarbaru,samarinda');

    return (
        <div className="featured">
            {loading ? (
                'Loading please wait'
            ) : (
                <>
                    <div className="featuredItem">
                        <img src="https://3.bp.blogspot.com/-VPqS1iSfRJo/VfqU99gfYJI/AAAAAAAAETs/PPIB53IVae4/s1600/Menara%2BPantau%2BSiring.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Banjarmasin</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img src="https://nabilrental.com/wp-content/uploads/2019/04/ikon-banjarbaru.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Banjarbaru</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://i.ytimg.com/vi/sYaTkL1L_eg/maxresdefault.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Samarinda</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
