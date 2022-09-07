import './Home.css';
import m60Splash from './m60_splash.webp'
import u80Splash from './u80_splash.webp'

const home = () => {
    return (
    <>
        <div className="m60">
            <img className="m60Splash" src={m60Splash}></img>
        </div>

        <div className="u80">
            <img className="u80Splash" src={u80Splash}></img>
        </div>
    </>
    )
}

export default home;