import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import CartIndexPage from '../CartIndexPage';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();
  console.log(location)

  const [cartMenu, setCartMenu] = useState(false);

  const navToggle = () => {
    if (location.pathname === '/checkout') {
      return 'hide'
    } else {
      return 'navigation'
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <NavLink to={`/users/${sessionUser.id}`}><i className="fa-regular fa-user"></i></NavLink>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className='user-button'><i className="fa-regular fa-user"></i></NavLink>
      </>
    );
  }

  return (
  <>
  <div className={navToggle()}>
    <ul>
      <li className='navitems'>

        <div className='nav-name'><NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className='name'>ZZY WORKS</h1></NavLink></div>
          <div className='nav-links'>
            <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='store'>Store</div></NavLink>
            <NavLink exact to="/catalog" style={{ textDecoration: 'none' }}><div className='catalog'>Catalog</div></NavLink>
            <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='studio'>Studio</div></NavLink>
            <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='updates'>Updates</div></NavLink>
          </div>
      </li>
    </ul>
   
    <div className='icons'>
      <div className='profile-icon'>{sessionLinks}</div>
      <div className="search-icon"><NavLink to="/"><i className="fa-solid fa-magnifying-glass"></i></NavLink></div>

      <div className='cart-collapse'>
        <button className="cart" onClick={() => setCartMenu(true)}>
          <div className='cart-icon'><i className="fa-solid fa-cart-shopping"></i></div>
        </button>
        {cartMenu && <CartIndexPage closeCartMenu={setCartMenu}/>}
      </div>
    </div>
  </div>
  </>
  );
}

export default Navigation;