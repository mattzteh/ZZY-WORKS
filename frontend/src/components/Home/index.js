import { Link } from 'react-router-dom';
import u80Splash from './u80Splash.webp'
import thermalSplash from './thermalSplash.jpeg'
import keycapSplash from './keycapSplash.jpeg'
import './Home.css';

const Home = () => {
    return (
    <>
    <div className="splashpage">

        <div className="u80">
            <img src={u80Splash}></img>
        </div>

        <div className='thermal-keeb'>
            <div className='splash-desc'>
                <h1>THERMAL SEQ2 KEYBOARD</h1>
                <Link to="/products/1"><button>BUY</button></Link>
            </div>
            <img src={thermalSplash}></img>
        </div>

        <div className="grid-keycaps">
            <div className='splash-desc'>
                <h1>GRID</h1>
                <h2>MX Chiclets / Keycaps</h2>
                <Link to="/products/3"><button>BUY</button></Link>
            </div>
            <img src={keycapSplash}></img>
        </div>

    </div>
    </>
    )
}

export default Home;