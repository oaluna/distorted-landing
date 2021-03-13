import { useState } from 'react';
import Logo from "../../Logo";
import './TopBarMenu.css';

const TopBarMenu = (props) => {
  const [page, setPage] = useState('homepage');
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const showPage = (pageName) => {
    setPage(pageName);
    setMobileMenuActive(false);
    props.changePage(pageName);
  };

  const toggleMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className='topBarContainer'>
      <div className='topBarContent'>
        <div
          onClick={toggleMenu}
          className={
            mobileMenuActive ? 'hamburger hamburgerActive' : 'hamburger'
          }>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>

        <div
          onClick={toggleMenu}
          className={
            mobileMenuActive
              ? 'menuContainer menuOpen'
              : 'menuContainer'
          }>
          <div className='colorBarMenu' />

          <div className='menuContent'>
            <div className='logoWrapper' style={{position: 'relative'}}onClick={(e) => showPage('homepage')}>
              <span><Logo style={{height: '50px'}}/></span>
            </div>

            <div className='menuItems'>
              <p onClick={(e) => showPage('services')}> Services </p>
              <p onClick={(e) => showPage('works')}> Case History </p>
              <p onClick={(e) => showPage('aboutus')}> About Us </p>
              <button
                className='mediumButton'
                onClick={(e) => showPage('aboutus')}>
                {' '}
                Get a Quote{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarMenu;
