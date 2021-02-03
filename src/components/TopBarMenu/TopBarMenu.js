import { useState } from 'react';
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
          <div className='line1'>-</div>
          <div className='line2'>-</div>
          <div className='line3'>-</div>
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
              <img src='https://svgshare.com/i/DAT.svg' alt='site logo' />
              <h4>Luna Web Solutions</h4>
            </div>

            <div className='menuItems'>
              <h5 onClick={(e) => showPage('services')}> Services </h5>
              <h5 onClick={(e) => showPage('works')}> Case History </h5>
              <h5 onClick={(e) => showPage('influencers')}> Influencers </h5>
              <h5 onClick={(e) => showPage('aboutus')}> About Us </h5>
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
