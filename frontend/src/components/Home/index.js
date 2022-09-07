import './Home.css';
import m60Splash from './m60_splash.webp'
import u80Splash from './u80_splash.webp'

const home = () => {
    return (
    <>
        <div className="m60">
            <h1 className="splashtext1">Shop Products</h1>
            <button className="splashbutton1">Buy</button>
            <img className="m60Splash" src={m60Splash}></img>
        </div>

        <div className="u80">
            <h1 className="splashtext2">Studio</h1>
            <button className="splashbutton2">View</button>
            <img className="u80Splash" src={u80Splash}></img>
        </div>
    </>
    )
}

export default home;