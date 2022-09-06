import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <NavLink to="/login"><i class="fa-regular fa-user"></i></NavLink>
      </>
    );
  }

  return (
  <>
  <div className="navigation">
    <ul>
      <li className='navitems'>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className='name'>ZZY WORKS</h1></NavLink>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='store'>Store</div></NavLink>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='catalog'>Catalog</div></NavLink>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='studio'>Studio</div></NavLink>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='updates'>Updates</div></NavLink>
       
        <div className='icons'>
          {sessionLinks}
        </div>

      </li>
    </ul>
  </div>
  </>
  );
}

export default Navigation;