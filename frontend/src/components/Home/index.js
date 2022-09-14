import { Link } from 'react-router-dom';
import './Home.css';
import u80Splash from './u80_splash.webp'
import koyuSplash from './KOYU_splash.webp'

const home = () => {
    return (
    <>
    <div className="splashpage">

        <div className="m60">
            <Link to="catalog"><button>Shop Now</button></Link>
            <img src={u80Splash}></img>
        </div>

        <div className="u80">
            <button>View</button>
            <img src={koyuSplash}></img>
        </div>
    </div>
    </>
    )
}

export default home;