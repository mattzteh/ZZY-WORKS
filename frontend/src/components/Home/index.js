import './Home.css';
import m60Splash from './m60_splash.webp'
import u80Splash from './u80_splash.webp'

const home = () => {
    return (
    <>
    <div className="splashpage">

        <div className="m60">
            <button>BUY</button>
            <img src={u80Splash}></img>
        </div>

        <div className="u80">
            <button>View</button>
            <img src={m60Splash}></img>
        </div>
    </div>
    </>
    )
}

export default home;