import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIndexPage from '../CartIndexPage';
import { useLocation } from 'react-router-dom';
import './Navigation.css';
import SearchBar from '../SearchBar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();
  const [cartMenu, setCartMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

//------------------------------------------------------------------------------
  const cartItemChanges = useSelector(state => {
    return Object.values(state.cartItems).reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  useEffect(() => {
    setCartMenu(true)
  }, [cartItemChanges])

  useEffect(() => {
    setCartMenu(false)
  }, [location])
//------------------------------------------------------------------------------ 

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

  if (toggleSearch) return <SearchBar closeSearch={setToggleSearch}/>


  return (
  <>
  <div className={navToggle()}>
    <ul>
      <li className='navitems'>

        <div className='nav-name'><NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className='name'>ZZY WORKS</h1></NavLink></div>
          <div className='nav-links'>
            <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='store'>Store</div></NavLink>
            <NavLink exact to="/catalog" style={{ textDecoration: 'none' }}><div className='catalog'>Catalog</div></NavLink>
            <NavLink exact to="/about-me" style={{ textDecoration: 'none' }}><div className='about-me'>About Me</div></NavLink>
          </div>
      </li>
    </ul>
   
    <div className='icons'>
      <div className='profile-icon'>{sessionLinks}</div>
      <div className="search-icon" onClick={(() => setToggleSearch(true))}><i className="fa-solid fa-magnifying-glass"></i></div>

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