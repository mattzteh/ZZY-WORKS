import { Link } from 'react-router-dom';
import u80Splash from './assets/u80Splash.webp'
import thermalSplash from './assets/thermalSplash.jpeg'
import keycapSplash from './assets/keycapSplash.jpeg'
import duckSplash from './assets/duckSplash.jpeg'
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

        <div className="duck">
            <div className='splash-desc'>
                <h1>DUCK</h1>
                <h2>LINEAR SWITCHES</h2>
                <Link to="/products/2"><button>BUY</button></Link>
            </div>
            <img src={duckSplash}></img>
        </div>

        <div className="grid-keycaps">
            <div className='splash-desc'>
                <h1>GRID</h1>
                <h2>MX CHICLETS / KEYCAPS</h2>
                <Link to="/products/3"><button>BUY</button></Link>
            </div>
            <img src={keycapSplash}></img>
        </div>

    </div>
    </>
    )
}

export default Home;