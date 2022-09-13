import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import CartIndexPage from '../CartIndexPage';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  const [cartMenu, setCartMenu] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
  <div className="navigation">
    <ul>
      <li className='navitems'>
        <div className='nav-name'>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className='name'>ZZY WORKS</h1></NavLink>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='store'>Store</div></NavLink>
          <NavLink exact to="/catalog" style={{ textDecoration: 'none' }}><div className='catalog'>Catalog</div></NavLink>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='studio'>Studio</div></NavLink>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='updates'>Updates</div></NavLink>
        </div>

        <div className='nav-links'>
       
          <div className='icons'>
            {sessionLinks}
            <NavLink to="/" className="search"><i className="fa-solid fa-magnifying-glass"></i></NavLink>

            <div className='cart-collapse'>
              <button className="cart" onClick={() => setCartMenu(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              {cartMenu && <div className='cart-page'><CartIndexPage closeCartMenu={setCartMenu}/></div>}
            </div>

          </div>
        </div>
      </li>
    </ul>
  </div>
  </>
  );
}

export default Navigation;